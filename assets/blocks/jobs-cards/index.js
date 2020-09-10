// Block dependancies

import icon from './icon';
import NHSTaxSelect from './taxSelect'

// Internal block libraries

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { 
	URLInputButton,
	URLInput,
	RichText,
	InspectorControls
} = wp.blockEditor;

const {
    PanelBody,
    PanelRow,
    SelectControl
} = wp.components;

// Register Block

export default registerBlockType(
	'nhsjobs/jobscards',
	{
		title: __('Jobs Cards', 'nhsjobs' ),
		description: __('Adds three of the latest jobs', 'nhsjobs' ),
		category: 'nhsjobs-blocks',
		icon: icon,
		keywords: [
			__( 'Jobs listings list', 'nhsjobs' ),
			__( 'Feed Vacencies Nursing', 'nhsjobs' ),
		],
		attributes: {
			url: {
				type: 'string'
			},
			title: {
				type: 'string',
				default: 'Latest Vacancies'
			},
			linkTxt: {
				type: 'string',
				default: 'View all Vacancies'
			},
			type: {
				type: 'string',
				default: 'jobs'
			},
			feed: {
				type: 'string',
				default: 'https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title'
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
			multiple: true, // allows more than one block of that type on the page
			reusable: true, // whether block is allowed to be a reusable block
		},
		edit: props => {
			const { attributes: { url, title, linkTxt, type, feed, location, country }, setAttributes, className } = props;

			let Cards = [];
			let btn = '';

			if( type === 'jobs' ){			                			

				Cards = [ 
					{
						title: 'Job Title',
						details: {
							Location: 'Job Location',
							Salary: 'Job Salary'
						}
						
					}, 
					{
						title: 'Job Title',
						details: {
							Location: 'Job Location',
							Salary: 'Job Salary'
						}
					}, 
					{
						title: 'Job Title',
						details: {
							Location: 'Job Location',
							Salary: 'Job Salary'
						}
					} 
				];

				btn = 'View Vacancy';

			}else{

				Cards = [ 
					{
						title: 'Opportunity Title',
						details: {
							Location: 'Opp Location',
							StaffGroup: 'Specialism'
						}
						
					}, 
					{
						title: 'Opportunity Title',
						details: {
							Location: 'Opp Location',
							StaffGroup: 'Specialism'
						}
					}, 
					{
						title: 'Opportunity Title',
						details: {
							Location: 'Opp Location',
							StaffGroup: 'Specialism'
						}
					} 
				];

				btn = 'View Opportunity';
			}

			function JobCard( card ) {

			  	return(
			        <div className="nhsuk-grid-column-one-third">
						<a className="nhsuk-promo__link-wrapper">
	    					<div className="nhsuk-promo__content">
	        					<h3 className="nhsuk-promo__heading">{ card.job.title }</h3>

			                    <dl className="nhsuk-summary-list">

			                    	{ Object.entries( card.job.details ).map(( [ name, title ], key) => (
			                            <div
			                                key={key}
			                                className="nhsuk-summary-list__row"
			                            >
			                                <dt className="nhsuk-summary-list__key">
			                                    {title}
			                                </dt>
			                                <dd className="nhsuk-summary-list__value">
			                                    {name}
			                                </dd>
			                            </div>
			                        ))}
			                    </dl>

			                    <div className="nhsuk-action-link">
			                        <span className="nhsuk-action-link__link">
			                            <svg className="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
			                                <path d="M0 0h24v24H0z" fill="none"></path>
			                                <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
			                            </svg>
			                            <span className="nhsuk-action-link__text">{ card.btn }</span>
			                        </span>
			                    </div>
			                </div>
		            	</a>
		        	</div>
				);
			}

			return [
				<InspectorControls>
		  			<PanelBody>
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

						{
							type == 'opportunity' ? (

								<PanelRow>
								    <NHSTaxSelect 
				                    	parentAttribute={ location }
				                    	childAttribute={ country }
				                    	parentAttrName='location'
				                    	childAttrName='country'
				                    	term='nhs_location'
				                    	parentLabel='Continent'
				                    	childLabel='Country'
				                    />
				  				</PanelRow>
							):( null )
						}
						
		  			</PanelBody>
		  		</InspectorControls>,
		  		<div className={ className }>
					<section className="nhsuk-grid-row">
	    				<div className="nhsuk-width-container">
	    					<div className="nhsuk-grid__item nhsuk-grid-column-full">
	    					<RichText
								tagName="h2"
								value={ title }
								onChange={ ( title ) => setAttributes( { title } ) }
							/>
			                <div className="nhsuk-grid-row nhsuk-promo-group nhsuk-job-cards">
			                	{

									Cards.map((job, index) => {

								        return <JobCard 
								        			key={ index } 
								        			job={ job }
								        			btn={ btn }
								        		/>
								      })
			                	}
			                    
			                </div>

			                <URLInputButton
								url={ url }
								onChange={ ( url ) => setAttributes( { url } ) }
							/>

			                <div className="nhsuk-action-link text-center">
			                    <a className="nhsuk-action-link__link">
			                        <svg className="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
			                            <path d="M0 0h24v24H0z" fill="none"></path>
			                            <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
			                        </svg>
			                        <RichText
										tagName="span"
										className="nhsuk-action-link__text"
										value={ linkTxt }
										onChange={ ( linkTxt ) => setAttributes( { linkTxt } ) }
									/>
			                    </a>
			                </div>
			            </div>

						</div>
					</section>
					{
						type == 'jobs' ? (
							<div>
								<hr />
								<h3>Change the default feed url</h3>
								<URLInput
									label={__('Add a valid NHS Job feed URL', 'nhsjobs')}
									value={ feed }
									onChange={ ( feed ) => setAttributes( { feed } ) }
								/>
								<p>default url is https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title</p>
							</div>
						):(null)
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


