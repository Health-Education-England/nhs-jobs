// Block dependancies

import icon from './icon';


// Internal block libraries

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

// Register Block

export default registerBlockType(
	'nhsjobs/jobsfeed',
	{
		title: __('Jobs Block', 'nhsjobs' ),
		description: __('Add feed from the NHS jobs site in here. If you leave this field blank the default is: https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title ', 'nhsjobs' ),
		category: 'nhsblocks',
		icon: icon,
		keywords: [
			__( 'Jobs listings list', 'nhsjobs' ),
			__( 'Feed Vacencies Nursing', 'nhsjobs' ),
		],
		attributes: {
			title: {
				type: 'string'
			}
		},
		supports: {
			align: true, // allow all alignments can also choose array of allowed alignments eg [ 'left', 'right', 'full' ]
			anchor: true, // allow support for an anchor tag
			customClassName: true, // allows a custom classname to be added by the user
			className: true, // allow default custom classname to be added to your block
			html: true, // allow the html to be edited
			inserter: true, // set to false if you don't want the block to be insertable
			multiple: true, // allows more than one block of that type on the page
			reusable: true, // whether block is allowed to be a reusable block
		},
		edit: props => {
			const { attributes: { title }, className, isSelected, setAttributes } = props;
			return (
				<div className={ className } >
					<RichText
						tagName="h2"
						placeholder={ __( "Add Title", "_vt" ) }
						onChange={ title => setAttributes( { title } ) }
						value={ title }
					/>
				</div>
			);
		},
		save: props => {
			const { attributes, className } = props;
			return null;
		},
	},

);