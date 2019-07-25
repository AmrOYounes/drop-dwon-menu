
import React from 'react';
import ReactDOM from 'react-dom';


export default class dropdown extends React.Component {
    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    }
    componentWillUnmount() {
        // make sure you remove the listener when the component is destroyed
        document.removeEventListener('click', this.handleClick, false);
    }
    handleClick = e => {

        // detect you click outside component
        if (!ReactDOM.findDOMNode(this).contains(e.target)) {
            this.props.hide();
        }

    }
    render() {
        return (
            <ul className="dropdown-content"  >
                {this.props.children}
            </ul>
        )
    }
}
