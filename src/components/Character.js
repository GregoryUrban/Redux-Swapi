import React from "react";

const Character = props => {
  return <div>
  <h3>{props.character.name} </h3>
  <p>Gender: {props.character.gender}</p> 
  <p>dob: {props.character.birth_year}</p>
  </div>;
};

export default Character;
