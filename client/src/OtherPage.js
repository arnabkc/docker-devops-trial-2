import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I am in some other page
            <Link to="/">Go Back to Home page</Link>
        </div>
    );
};
