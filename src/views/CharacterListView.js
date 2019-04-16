import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getPeople } from "../actions";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getPeople()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        console.log("Not Fetching Bro!"),
        <h2>Character List View</h2>
        // {props.characters && (
          // <div>
            // <p>{props.characters.name}</p>
            // <p>{props.characters.height}</p>
            // <p>{props.characters.mass}</p>
            // <p>{props.characters.hair_color}</p>
            // <p>{props.characters.gender}</p>
            // <p>{props.characters.homeworld}</p>
  
  
          // </div>
        // )}
        // {props.error && <p className="error">{props.error}</p>}
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      console.log("Its Fetching Bro!"),
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
  }
}


export default connect(
  mapStateToProps,
  {getPeople}
)(CharacterListView);
