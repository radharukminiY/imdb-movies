import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMovie, setLoading} from '../../actions/searchActions';
import Loader from '../layout/loader';
import './cards.css';

export class Movie extends Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }
    render() {
        const {loading,movie} = this.props;

        let movieInfo = (
        <div className="container">
        <div className="row">
        <div className="col-md-4 card card-body"><center>
        <img src={movie.Poster} className="thumbnail" alt="Poster"/></center>
        <div className="col-md-8">
        <h2 className="mb-4">{movie.Title}</h2>
        <ul className="list-group">
        <li className="list-group-item">
        <strong>Genre:</strong> {movie.Genre}
        </li>
        <li className="list-group-item">
        <strong> Relesed:</strong> {movie.Released}
        </li>
        <li className="list-group-item">
        <strong> Rated:</strong> {movie.Rated}
        </li>
        <li className="list-group-item">
        <strong> IMDB Rating: </strong> {movie.imdbRating}
        </li>
        <li className="list-group-item">
        <strong> Director:  </strong> {movie.Director}
        </li>
        <li className="list-group-item">
        <strong> Writer:</strong> {movie.Writer}
        </li>
        <li className="list-group-item">
        <strong>Actors:</strong> {movie.Actors}
        </li>
        </ul>
        </div>
        </div>
        </div><hr/>
            <div className="about">
            <div className="row">
            <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
            <h3>About</h3>
           {movie.Plot}
            <hr/></div>
            <div className="back">
            <a href={`http://www.imdb.com/title/` + movie.imdbID}
            rel="noopener noreferrer"
            className="btn btn-primary">
            View in IMDB </a><br/>
  <Link to="/" className="btn btn-default text-light">Go Back To Search</Link>
          </div></div>
          </div>
          </div>
        </div>)

        let content = loading ? <Loader /> : movieInfo;
        return (
          <div>
          {content}
          </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchMovie, setLoading})(Movie);
