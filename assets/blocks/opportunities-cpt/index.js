// Block dependancies

import icon from './icon';
import NHSTaxSelect from './taxSelect'


// Internal block libraries

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { URLInput } = wp.blockEditor;
const { DateTimePicker, ToggleControl } = wp.components;


// De-Registers this block if the post type is not the Oppertunities

wp.domReady( function() {

  const postType = wp.data.select('core/editor').getCurrentPostType();

  if( postType !== 'nhs_opportunities' ){
  	wp.blocks.unregisterBlockType( 'nhsjobs/opportunites' );
  }

} );


// Register Block

export default registerBlockType(
	'nhsjobs/opportunites',
	{
		title: __('Opportunities', 'nhsjobs' ),
		description: __('Add meta data to the post', 'nhsjobs' ),
		category: 'nhsblocks',
		icon: icon,
		keywords: [
			__( 'Opportunities Meta Information', 'nhsjobs' ),
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
			link: {
				type: 'string',
				source: 'meta',
				meta: 'nhsjobs_link',
			},
			location: {
				type: 'string'
			},
			country: {
				type: 'string'
			},
			speciality: {
				type: 'string'
			},
			partners: {
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
			reusable: false, // whether block is allowed to be a reusable block
		},
		edit: props => {
			const { attributes: { end, location, country, speciality, partners, link }, className, isSelected, setAttributes } = props;

			return (
				<div className={ className } >
					<h2>{__('Post Meta', 'nhsjobs') }</h2>
					<div className="columns">
						<div className="col-1">
							<h3>{__('End Date', 'nhsjobs') }</h3>
							<DateTimePicker
					            currentDate={ end }
					            onChange={ ( end ) => setAttributes( { end } ) }
					            is12Hour={ true }
		                    />
		                </div>
		                <div className="col-1">
		                    <h3>{__('Location', 'nhsjobs') }</h3>
		                    <NHSTaxSelect 
		                    	parentAttribute={ location }
		                    	childAttribute={ country }
		                    	parentAttrName='location'
		                    	childAttrName='country'
		                    	term='nhs_location'
		                    	parentLabel='Continent'
		                    	childLabel='Country'
		                    />
		                    <h3>{__('Speciality', 'nhsjobs') }</h3>
		                    <NHSTaxSelect 
		                    	parentAttribute={ speciality }
		                    	childAttrName={ false }
		                    	parentAttrName='speciality'
		                    	term='nhs_speciality'
		                    	parentLabel='Speciality'
		                    />
		                    <h3>{__('Partners', 'nhsjobs') }</h3>
		                    <NHSTaxSelect 
		                    	parentAttribute={ partners }
		                    	childAttrName={ false }
		                    	parentAttrName='partners'
		                    	term='nhs_partners'
		                    	parentLabel='Partners'
		                    />
		                    <h3>{__('Job application link', 'nhsjobs') }</h3>
		                    <URLInput
		                    	label={ __('Job link', 'nhsjobs') }
		                    	onChange={ ( link ) => setAttributes( { link } ) }
		                    	value={ link }
		                    />
		                    <small>If you want to add an email address, add a <strong> mailto: </strong> tag at the front of the email.
		                    For example - <em>mailto:email@nhs.uk</em></small>
		                </div>
                    </div>
				</div>
			);
		},
		save: props => {
			const { attributes, className } = props;
			return null;
		},
	},

);