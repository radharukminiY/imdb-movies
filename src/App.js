import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/movies';
import store from './store/store';


class App extends Component{

  render(){
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
