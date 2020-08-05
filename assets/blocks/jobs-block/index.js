// Block dependancies

import icon from './icon';


// Internal block libraries

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { 
	URLInput,
	InspectorControls 
} = wp.blockEditor;

const {
    PanelBody,
    PanelRow,
    SelectControl
} = wp.components;

const {
    Fragment
} = wp.element;


// Register Block

export default registerBlockType(
	'nhsjobs/jobsfeed',
	{
		title: __('Jobs Block', 'nhsjobs' ),
		description: __('Add a feed from the NHS jobs site.', 'nhsjobs' ),
		category: 'nhsblocks',
		icon: icon,
		keywords: [
			__( 'Jobs listings list', 'nhsjobs' ),
			__( 'Feed Vacencies Nursing', 'nhsjobs' ),
		],
		attributes: {
			url: {
				type: 'string'
			},
			type: {
				type: 'string',
				default: 'jobs'
			}
		},
		supports: {
			align: false, // allow all alignments can also choose array of allowed alignments eg [ 'left', 'right', 'full' ]
			anchor: true, // allow support for an anchor tag
			customClassName: true, // allows a custom classname to be added by the user
			className: true, // allow default custom classname to be added to your block
			html: false, // allow the html to be edited
			inserter: true, // set to false if you don't want the block to be insertable
			multiple: false, // allows more than one block of that type on the page
			reusable: true, // whether block is allowed to be a reusable block
		},
		edit: props => {
			const { attributes: { url, type }, className, isSelected, setAttributes } = props;
			return [

				<InspectorControls>
					<PanelBody
						title={ __( 'Feed Options', 'nhsjobs' ) }
					>
					<PanelRow>

					<SelectControl
				        label="Size"
				        value={ type }
				        options={ [
				            { label: 'NHS Jobs Feed', value: 'jobs' },
				            { label: 'NHS Volunteering Feed', value: 'opportunity' },
				        ] }
				        onChange={ ( type ) => { setAttributes( { type } ) } }
				    />

					</PanelRow>
					</PanelBody>
				</InspectorControls>,
				<div className={ className } >

					{
						type == 'jobs' ? (
							<Fragment>
								<h3>{ __('NHS Jobs Feed:', 'nhsjobs' ) }</h3>
								<URLInput
									placeholder={ __( "Add NHS feed URL", "_vt" ) }
									onChange={ url => setAttributes( { url } ) }
									value={ url }
								/>
								<p>{ __('If you leave this field blank the feed will default to: https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title') } </p>
							</Fragment>

						):(
							<Fragment>
								<h3>{ __('NHS Oppertunities Feed:', 'nhsjobs' ) }</h3>
								<p>{ __('Oppertunities feed imported from this website') } </p>
							</Fragment>
						)
					}

					
				</div>
			];
		},
		save: props => {
			const { attributes, className } = props;
			return null;
		},
	},

);