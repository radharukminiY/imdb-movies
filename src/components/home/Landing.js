import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchForm from './searchForm';
import MoviesContainer from './container';
import Loader from '../layout/loader';


export class Landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container">
               <SearchForm />
               {loading ? <Loader /> : <MoviesContainer />}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);
