////file name: searchbox.component.jsx ../src/components/search-box/searchbox.component.jsx
import React from 'react';
import './searchbox.styles.css';

//deconstruct props.placeholder, props.handleChange to ({placeholder, handleChange})
export const SearchBox = ( {placeholder, handleChange}) => {

    return (
        
        <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
    );
}
