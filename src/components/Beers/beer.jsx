import React, { Component } from 'react';
import Navbar from './../Navbar/navbar';
import './beer.css';
import { BeersUrl } from './../../config';

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
        this.getBeer();
    }

    getBeer = () => {
        fetch(BeersUrl)
            .then(response => response.json())
            .then(beer => {
                console.log(beer);
                let beers = beer;
                this.setState({
                    beers: beers
                })
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
        const renderBeers = currentBeers.map((beer, index) => {
            return <div key={beer.id} className="col-md-12">
                <div className="box-size border">
                    <img src={beer.image_url}></img>
                    <div>
                        <h2>{beer.name}</h2>
                        <h4>{beer.description}</h4>
                        <a href="" data-toggle="tooltip" data-placement="right" title="Add to Favourites" ><i className="far fa-star"></i></a>
                    </div>
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
                    <ul id="page-numbers" className="pagination numbers-page">
                        {renderPageNumbers}
                    </ul>
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
