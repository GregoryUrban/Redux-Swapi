import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getPeople } from "../actions";
// import { getSpecies } from "../actions";



class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getPeople()
    // this.props.getSpecies()
  }

  fetchNext = () => {
    if (this.props.next){
      this.props.getPeople(this.props.next);
    }
  }
  fetchPrevious = () => {
    if (this.props.previous){
      this.props.getPeople(this.props.previous);
    }
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        console.log("Not Fetching Bro!"),
        <h2>Loading...</h2>
       
      )
    }
    return (
      <div className="CharactersList_wrapper">
      <div className="btn-section">
        <button onClick={this.fetchPrevious}>Next</button>
        <button onClick={this.fetchNext}>Previous</button>
      </div>

        <CharacterList characters={this.props.characters} />
        <div className="btn-section">
          <button onClick={this.fetchPrevious}>Next</button>
          <button onClick={this.fetchNext}>Previous</button>
      </div>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    next: state.charsReducer.next,
    previous: state.charsReducer.previous,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
    // species: state.speciesReducer.name

  }
}


export default connect(
  mapStateToProps,
  {getPeople},
  // {getSpecies}
)(CharacterListView);
