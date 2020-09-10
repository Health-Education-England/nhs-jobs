const path = require('path'),
    webpack = require('webpack'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    ManifestPlugin = require('webpack-manifest-plugin'),
    IgnoreEmitWebPackPlugin = require( 'ignore-emit-webpack-plugin' ),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
;

const devMode = process.env.NODE_ENV !== 'production';

module.exports = (env, argv) => {

    const
        analyze = false,
        isProduction = argv.mode === 'production',
        useSourcemaps = !isProduction,
        babelConfig = {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    sourceMap: useSourcemaps,
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: "usage",
                            corejs: 3,
                            targets: {
                                browsers: [
                                    "> 0.3%",
                                    "IE 11"
                                ],
                            },
                        }],
                        "@babel/preset-react",
                    ],
                    plugins: [
                        ["@babel/plugin-transform-runtime", {
                            corejs: 3,
                        }],
                        "@babel/plugin-syntax-dynamic-import",
                    ]
                }
            }
        },
        plugins = [
            new ManifestPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new IgnoreEmitWebPackPlugin( [ 'jobs.backend.js', 'jobs.frontend.js' ] ),
            new MiniCssExtractPlugin({
              filename: '[name].css',
              chunkFilename: '[id].css'
            }),
            new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.css$/g,
              cssProcessor: require('cssnano'),
              cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
              },
              canPrint: true
            })
        ]
    ;

    if (isProduction) {
        babelConfig.use.options.plugins.push("transform-react-remove-prop-types");
    }
    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin({
            generateStatsFile: true,
            openAnalyzer: false,
        }));
    }

    return {
        mode: isProduction ? 'production' : 'development',
        context: path.resolve(__dirname),
        entry: {
            "./admin/js/blocks.editor": "./assets/blocks/index.js",
            "./public/js/vacancyFeed": "./assets/frontend/vacancy.js",
            "./public/css/jobs.frontend": './assets/blocks/style.scss',
            "./admin/css/jobs.backend": './assets/blocks/editor.scss'
        },
        output: {
            path: path.resolve(__dirname),
            filename: '[name].js',
        },
        module: {
            rules: [
                babelConfig,
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                      {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          hmr: process.env.NODE_ENV === 'development',
                        },
                      },
                      'css-loader',
                      'postcss-loader',
                      'sass-loader',
                    ]
                }
            ],
        },
        plugins: plugins,
        devtool: useSourcemaps ? 'inline-source-map' : false,
        devServer: {
            host: 'localhost',
            port: 8080,
            contentBase: ('/public/'),
            publicPath: 'localhost:8080/build/',
            watchContentBase: false,
            compress: false,
            open: false,
            disableHostCheck: true,
            hot: true,
            progress: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        }
    }
};
