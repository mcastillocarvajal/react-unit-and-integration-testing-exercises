import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const FirstApp = ( { greeting, subtitle } ) => {

    return (
        <>
            <h1> { greeting } </h1>
            {/* <h1> { JSON.stringify( greeting, null, 3 ) } </h1> */}
            <p>{ subtitle }</p>
        </>
    )
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Soy un subtitulo'
} 
export default FirstApp;