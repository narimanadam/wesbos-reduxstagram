import React from 'react';
import {Link } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none', color: '#125688' }}>
            <h1>ReduxStagram</h1>
            </Link>
        </div>
    );
};

export default Main;