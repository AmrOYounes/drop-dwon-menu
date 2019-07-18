import React, { Component } from 'react'
import './tour.scss';


export default class tour extends Component {
    state = {
        flag: false
    };
    toggleInfo = () => {
        this.setState({
            flag: !this.state.flag
        });
    }
    render() {
        // console.log(this.props);

        const { id, city, img, name, info } = this.props.tour;
        const { removeTour } = this.props;


        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tourpicture" />
                    <span className="close-btn" onClick={()=>removeTour(id)}>
                        <i className="fas fa-window-close fa-lg"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info <span onClick={this.toggleInfo} ><i className="fas fa-caret-square-down"></i></span></h5>
                    {/* <p>{info}</p> */}
                    {
                        this.state.flag && <p>{info}</p>
                    }
                </div >


            </article>
        )
    }
}
