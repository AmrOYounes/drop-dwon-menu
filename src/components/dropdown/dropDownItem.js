import React from 'react';

export default function dropDownItem(props) {
    const { link, text, type } = props;

    {
        switch (type) {
            case "link":
                return (<li> <a href="javascript:void(0)">{text}</a></li>);

            case "img":
                return (<li><img src={link} /></li>);


            case "btn":
                return (<li><button>{text}</button></li>);




            default:
                break;
        }
    }


}
