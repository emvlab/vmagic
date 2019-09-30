import React, { Component } from "react";
import "./Header.css";
import logo  from "../Images/logo.png";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "menu": [
                {"name": "MySQL", "href": "#/"},
                {"name": "Postgres", "href": "#/pgsql"}
            ]
        };
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bgDark">
                <div className="container">
                    <a rel="noopener noreferrer" className="navbar-brand" href="#/">
                        <img src={logo} width="50" height="50" alt="logo vmagic"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                this.state.menu.map((prop, key) => {
                                    let className = "nav-item";
                                    if (this.props.page === key) {
                                        className += " border-bottom"
                                    }
                                    return (
                                        <li key={key} className={className}>
                                            <a className={"nav-link text-white"} rel="noopener noreferrer" href={prop.href}>{prop.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
