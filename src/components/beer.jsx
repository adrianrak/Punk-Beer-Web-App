import React, { Component } from 'react';

import './beer.css';

export default class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            currentPage: 0

        }
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let beers = data;
            this.setState({beers: beers})
        })
    }

    previousPage = () => {
        if (this.state.currentPage !== 1)
          this.setState((prevState) => ({currentPage: (prevState.currentPage - 1)}))
    }
      
    nextPage = () => {
        if (this.state.currentPage + 1 < this.state.beers.lenght)
          this.setState((prevState) => ({currentPage: (prevState.currentPage + 1)}))
    }

    render() {
        return (
        <div>    
            <div className="container">
                <h1>Hello!</h1>
                <div className="row">
                    {this.state.beers.slice((this.state.currentPage * 20), 20).map((data) =>
                    <div key={data.id} className="col-md-4 border border-primary">
                        <h5>{data.name}</h5>
                       <img src={data.image_url}></img>
                    </div>
                    )}
                    
                </div>
                <button onClick={this.previousPage}>Previous Page</button>
                <button onClick={this.nextPage}>Next Page</button>
            </div>
        </div>  
    );
  }
}
