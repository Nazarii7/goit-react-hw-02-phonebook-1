import React from 'react';

import PropTypes from 'prop-types';

import './Filter.css'

export default function Filter({value, onChangeFilter}) {
    return (
        <div className="Filter">
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={e => onChangeFilter(e.target.value)}/>
        </div>
    )
}

Filter.defaultProps = {
    value: '',
}

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
}
