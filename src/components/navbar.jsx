import React, { Component } from 'react';
import './navbar.css'

export default class Navbar extends Component {

    render() {
        return (
            <div>    
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Beans Love Beers</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Favourites</a></li>
                        </ul>
                    </div>
                </nav>
            </div>  
        );
    }
}
