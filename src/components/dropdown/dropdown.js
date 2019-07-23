import React from 'react';
import './dropdown.css';

export default function dropdown(props) {
    const { children } = props;
    return (
        <div>
            <div class="dropdown-content">
                {children}
            </div>
        </div>
    );


}
