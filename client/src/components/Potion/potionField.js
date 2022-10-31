import React from 'react';

function PotionField(props) {

  return <>
    <label>{props.field}: </label>
    <input type="number" ref={props.ref} id="inputA" name="inputA"></input>
  </>;
}

export default PotionField;