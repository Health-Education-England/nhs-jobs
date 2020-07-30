// Block dependancies

import icon from './icon';
import NHSTaxSelect from './taxSelect'


// Internal block libraries

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { URLInput } = wp.blockEditor;
const { DateTimePicker, ToggleControl } = wp.components;

// Register Block

export default registerBlockType(
	'nhsjobs/opportunites',
	{
		title: __('Opportunites', 'nhsjobs' ),
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
			end: {
				type: 'string',
				default: new Date(),
				source: 'meta',
				meta: 'nhsjobs_end',
			},
			location: {
				type: 'string'
			},
			country: {
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
			const { attributes: { end, location, country }, className, isSelected, setAttributes } = props;
			return (
				<div className={ className } >
					<DateTimePicker
			            currentDate={ end }
			            onChange={ ( end ) => setAttributes( { end } ) }
			            is12Hour={ true }
                    />
                    <NHSTaxSelect 
                    	parentAttribute={ location }
                    	childAttribute={ country }
                    	parentAttrName='location'
                    	childAttrName='country'
                    	term='nhs_location'
                    	parentLabel='Continent'
                    	childLabel='Country'
                    />
                    { console.log( location, country ) }
				</div>
			);
		},
		save: props => {
			const { attributes, className } = props;
			return null;
		},
	},

);