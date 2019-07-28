import React, { Component } from 'react';

export default class navbaritem extends Component {
    state = {
        isopen: false
    }

    toggle() {
        this.setState({
            isopen: !this.state.isopen
        })
    }
    render() {
        return (
            <a href="#">patman</a>
        );
    }
}
