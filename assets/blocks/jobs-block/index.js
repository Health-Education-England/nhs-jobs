// Block dependancies

import icon from './icon';


// Internal block libraries

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { URLInput } = wp.blockEditor;

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
			const { attributes: { url }, className, isSelected, setAttributes } = props;
			return (
				<div className={ className } >
					<h3>{ __('Add feed from the NHS jobs site in here:', 'nhsjobs' ) }</h3>
					<URLInput
						placeholder={ __( "Add NHS feed URL", "_vt" ) }
						onChange={ url => setAttributes( { url } ) }
						value={ url }
					/>
					<p>{ __('If you leave this field blank the feed will default to: https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title') } </p>
				</div>
			);
		},
		save: props => {
			const { attributes, className } = props;
			return null;
		},
	},

);