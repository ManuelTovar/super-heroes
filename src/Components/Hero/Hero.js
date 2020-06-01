import React, { Component } from "react";
import "../Hero/Hero.css";

/**
 * @param {*} key
 * @param {*} resource
 * @param {*} extension
 * @param {*} name
 */

class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resource: this.props.resource,
            extension: this.props.extension,
            name: this.props.name,
            comic: this.props.comic,
            popup: false
        }
    }

    onClick = () => {
        if (this.state.popup) {
            this.setState({ popup: false })

        } else {
            this.setState({ popup: true })

        }
    }

    popUp = () => {
        if (this.state.popup) {
            return (
                <div className="o-comics" onClick={this.onClick}>
                    <div className="o-comics-card">
                        <h4>Comics:</h4>
                        <button onClick={this.onClick}>X</button>
                        {
                            this.state.comic.map((comic) => {
                                return (
                                    <ul className="o-list" key={comic.name}>
                                        <li><a href={comic.resourceURI}> {comic.name}</a></li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="o-hero-card" onClick={this.onClick}>
                    <h4>{this.state.name}</h4>
                    <div className="o-img-container">
                        <img src={`${this.state.resource}.${this.state.extension}`} alt="hero"></img>
                    </div>

                </div>
                {
                    this.popUp()
                }
            </div>
        )

    }

}

export default Hero;







