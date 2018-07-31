import React, { Component } from 'react';

import './beer.css';

export default class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []

        }
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let beers = data;
            this.setState({beers: beers})
        })
    }
    render() {
        return (
        <div>    
            <div className="container">
                <h1>Hello!</h1>
                <div className="row">
                    {this.state.beers.map((data) =>
                    <div className="col-md-4 border border-primary">
                        <h5>{data.name}</h5>
                       <img src={data.image_url}></img>
                    </div>
                    )}
                </div>
            </div>
        </div>  
    );
  }
}
