// Block dependancies

import icon from './icon';


// Internal block libraries

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { 
	URLInputButton,
	RichText
} = wp.blockEditor;

// Register Block

export default registerBlockType(
	'nhsjobs/jobscards',
	{
		title: __('Jobs Cards', 'nhsjobs' ),
		description: __('Adds three of the latest jobs', 'nhsjobs' ),
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
			title: {
				type: 'string',
				default: 'Latest Vacancies'
			},
			linkTxt: {
				type: 'string',
				default: 'View all Vacancies'
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
			const { attributes: { url, title, linkTxt }, className, isSelected, setAttributes } = props;
			const CardLength = [1, 2, 3];

			function JobCard( props ) {
			  	return(
			        <div className="nhsuk-grid-column-one-third">
						<a className="nhsuk-promo__link-wrapper">
	    					<div className="nhsuk-promo__content">
	        					<h3 className="nhsuk-promo__heading">Job Title {props.i }</h3>

			                    <dl className="nhsuk-summary-list">
		                            <div className="nhsuk-summary-list__row">
		                                <dt className="nhsuk-summary-list__key">Location</dt>
		                                <dd className="nhsuk-summary-list__value">Job Location</dd>
		                            </div>
		                            <div className="nhsuk-summary-list__row">
		                                <dt className="nhsuk-summary-list__key">Salary</dt>
		                                <dd className="nhsuk-summary-list__value">Job Salary</dd>
		                            </div>
			                    </dl>

			                    <div className="nhsuk-action-link">
			                        <span className="nhsuk-action-link__link">
			                            <svg className="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
			                                <path d="M0 0h24v24H0z" fill="none"></path>
			                                <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
			                            </svg>
			                            <span className="nhsuk-action-link__text">View Vacancy</span>
			                        </span>
			                    </div>
			                </div>
		            	</a>
		        	</div>
				);
			}

			return (
				<section className="nhsuk-grid-row">
    				<div className="nhsuk-width-container">
    					<div className="nhsuk-grid__item nhsuk-grid-column-full">
    					<RichText
							tagName="h2"
							value={ title }
							onChange={ ( title ) => setAttributes( { title } ) }
						/>
		                <div className="nhsuk-grid-row nhsuk-promo-group homepage-vacancies">
		                	{
								CardLength.map((i, index) => {
							        return <JobCard key={ index } />
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
			);
		},
		save: props => {
			const { attributes, className } = props;
			return null;
		},
	},

);


