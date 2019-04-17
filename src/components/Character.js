import React from "react";

const Character = props => {
  return <div className='characterBox'>
  <h3>{props.character.name} </h3>
  <p>Gender: {props.character.gender}</p> 
  <p>dob: {props.character.birth_year}</p>
  <p>Height: {props.character.height}</p>
  <p>Homeworld: {props.character.homeworld}</p>
  </div>;
};

export default Character;
