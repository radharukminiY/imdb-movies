import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './cards.css';

export class MovieCards extends Component {
    render() {
        const {movie} = this.props;
        return (
              <center>
              <div className="col-md-5">
              <div className="card card-body bg-dark text-center h-100">
              <img className="w-300 mb-5" src={movie.Poster} alt="Movie Cover"/>
              <h3 className="text-light card-title">
              {movie.Title} - {movie.Year}</h3>
                <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
              Movie Details <i className="fa fa-chevron-right"/>
              </Link><hr/>
              </div>
              </div></center>
        )
    }
}

export default MovieCards;
