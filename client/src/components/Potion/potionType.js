import React from 'react';

const PotionType = props => {
  return <>
    <div className='potionType'>
      <input type="radio" id={props.id} name="potion"/>
      <label>{props.label}</label>
    </div>
  </>
}
 
export default PotionType;