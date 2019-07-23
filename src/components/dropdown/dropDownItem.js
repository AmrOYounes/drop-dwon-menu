import React from 'react';

export default function dropDownItem(props) {
    const { link, text } = props;
    return (
        <a href={link}>{text}</a>
    );
}
