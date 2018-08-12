import React, { Component } from 'react';
import Navbar from './../Navbar/navbar';
import './beer.css';
import {BeersUrl} from './../../config';

export default class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            currentPage: 1,
            beersPerPage: 9

        }
    }

    componentDidMount() {
        fetch(BeersUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let beers = data;
            this.setState({beers: beers})
            console.log(this.state.beers);
        })
    }
  
    handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    render() {
        const { beers, currentPage, beersPerPage } = this.state;

        const indexOfLastBeers = currentPage * beersPerPage;
        const indexOfFirstBeers = indexOfLastBeers - beersPerPage;
        const currentBeers = beers.slice(indexOfFirstBeers, indexOfLastBeers);
            console.log('indexOfFirstBeers', indexOfFirstBeers);
            console.log('indexOfLastBeers', indexOfLastBeers);
            console.log('currentBeers', currentBeers);
        const renderBeers = currentBeers.map((data, index) => {
            return <div key={data.id} className="col-md-4">
                <div className="box-size border border-primary">
                    <h5>{data.name}</h5>
                    <img src={data.image_url}></img>
                </div>
            </div>;
        });

        const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(beers.length / beersPerPage); i++) {
            pageNumbers.push(i);
            }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
            <li className="page-item page-link"
                key={number}
                id={number}
                onClick={this.handleClick}
            >
                {number}
            </li>
      );
    });

        return (
        <div>   
            <Navbar /> 
            <div className="container beers-page">
                <h1>Hello!</h1>
                <div className="row">
                    {renderBeers}
                </div>
                <ul id="page-numbers" className="pagination numbers-page">
                    {renderPageNumbers}
                </ul>
            </div>
        </div>  
    );
  }
}
