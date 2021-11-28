import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

    componentDidMount() {
      console.log(this.props);
      this.props.fetchCats();
      // We want our cat pics to be fetched when the App component is first loaded up
    }
  
  render() {
    console.log(this.props.catPics);
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

