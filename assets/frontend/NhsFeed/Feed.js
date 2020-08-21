import React from 'react';
import PropTypes from 'prop-types';
import FeedForm from './FeedForm';
import FeedListing from './FeedListing';
import FeedPagination from './FeedPagination';

export default function Feed(props) {
    const {
        filters,
        pagination,
        items,
        onFiltersChange,
        type,
        btn,
        notFoundTxt,
        notFoundUrl
    } = props;

    return (
        <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-one-third">
                <h3>Filter your results and find the role for you</h3>
                <FeedForm filters={filters}
                          onFiltersChange={onFiltersChange}
                />
            </div>
            <div className="nhsuk-grid-column-two-thirds nhsuk-job-list">
                {!items.length && (
                    <div className="nhsuk-grid-column-full-width nhsuk-promo nhsjobs-not-found">
                        <a className="nhsuk-promo__link-wrapper"
                           href={notFoundUrl}
                        >
                            <div className="nhsuk-promo__content">
                            { notFoundTxt.split("\n").map( function(item) {
                                  return (
                                    <p>
                                      {item}
                                    </p>
                                  )
                                })}

                            </div>
                        </a>
                    </div>
                )}
                {items.map((item, key) => (
                    <FeedListing key={key}
                                 item={item}
                                 type={type} 
                                 btn={btn} />
                ))}
                <FeedPagination pagination={pagination}
                                onFiltersChange={onFiltersChange}
                />
            </div>
        </div>
    );
}

Feed.propTypes = {
    pagination: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    onFiltersChange: PropTypes.func.isRequired,
};
