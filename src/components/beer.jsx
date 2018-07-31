import React, { Component } from 'react';

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
          <h1>Hello!</h1>
          {this.state.beers.map((data) =>
              <div><img src={data.image_url}></img></div>
        )}
        
        </div>
    );
  }
}
