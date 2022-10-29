import React from 'react';
import './potionInfo.css';

function PotionInfo() {
  return <>
    <fieldset className='flex justfy-center'>
      <legend>
        Potion Info
      </legend>
      <div className='slideContainer'>
        <input type="range" min="1" max="100" id="myRange" class="slider"></input>
      </div>
    </fieldset> 
  </>
}


export default PotionInfo;