import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class FeedForm extends Component {

    constructor(props) {
        super(props);
        this.job_employer_search = React.createRef();
        this.job_country_search = React.createRef();

        const { filters } = this.props;

        this.state = {
            filters: filters,
        };

        this.handleEmployerSearch = this.handleEmployerSearch.bind(this);
    }

    handleEmployerSearch( name, event ) {
        event.preventDefault();
        let search_name = name + '_search'
        const {filters} = this.props;
        const job_employer_search = this[search_name].current.value.toLowerCase();

        let options = Object.entries( filters[name].options ).map(([name, option]) => {

            option.show = name.toLowerCase().indexOf( job_employer_search ) >= 0;
            
            return {[name]:option};
        });

        filters.job_employer.options = Object.assign(...options);

        this.setState({
            filters: filters,
        });

    }

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    render() {
        const { onFiltersChange, type } = this.props;

        return (
            <form action="#">
            {Object.entries(this.state.filters).map(([name, filter]) => {

                let empty = ! this.isEmpty( filter.options );

                if( empty ){

               return(
                <fieldset key={name}
                    className="nhsuk-fieldset nhsuk-expander-group"
                    aria-labelledby={"details-label-" + name}>
                    <details className="nhsuk-details nhsuk-expander" open="">
                        <summary className="nhsuk-details__summary"
                                 role="button"
                                 aria-controls={"details-content-" + name}
                                 aria-expanded="true">
                            <legend className="nhsuk-fieldset__legend nhsuk-details__summary-text" id={"details-label-" + name}>{filter.title}</legend>
                        </summary>
                        <div className="nhsuk-details__text" id={"details-content-" + name} aria-hidden="false">
                            {  name === 'job_employer'  && (
                                <span className="nhsuk-hint">
                                    <input type="text"
                                       className="nhsuk-input"
                                       placeholder={`Search ${filter.title}`}
                                       aria-label={`Search ${filter.title}`}
                                       ref={this.job_employer_search}
                                       onChange={ ( event ) => { this.handleEmployerSearch( name, event ) } }
                                    />
                                </span>
                            )}
                            {  name === 'job_country'  && (
                                <span className="nhsuk-hint">
                                    <input type="text"
                                       className="nhsuk-input"
                                       placeholder={`Search ${filter.title}`}
                                       aria-label={`Search ${filter.title}`}
                                       ref={this.job_country_search}
                                       onChange={ ( event ) => { this.handleEmployerSearch( name, event ) } }
                                    />
                                </span>
                            )}
                            <div className="nhsuk-checkboxes">
                                {Object.entries(filter.options).map(([option, checked], key) => (
                                    <div key={name + key}
                                         className={`nhsuk-checkboxes__item ${!checked.show && !checked.checked ? 'hidden' : checked.checked ? 'checked' : ''}
                                    `}>
                                        <input className="nhsuk-checkboxes__input"
                                               id={name + key}
                                               name={name}
                                               checked={checked.checked}
                                               onChange={() => onFiltersChange(name,option, !checked.checked)}
                                               type="checkbox"
                                               value={option}
                                               aria-labelledby={name + key + "-label details-label-" + name}/>
                                        <label className="nhsuk-label nhsuk-checkboxes__label"
                                               htmlFor={name + key}
                                               id={name + key + "-label"}
                                               dangerouslySetInnerHTML={{ __html: option }}
                                        ></label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </details>
                </fieldset>
            )}
            })
            }
            </form>
        );
    }
}

FeedForm.propTypes = {
    filters: PropTypes.object.isRequired,
    onFiltersChange: PropTypes.func.isRequired,
};
