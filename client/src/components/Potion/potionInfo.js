import React from 'react';

import './potionInfo.css';
import PotionType from './potionType';

function PotionInfo() {

  const getRadios = () => {
    return <>
      <div className='potionTypeContainer'>
        <PotionType id="health" label="Health"/>
        <PotionType id="mana" label="Mana"/>
        <PotionType id="stamina" label="Stamina"/>
        <PotionType id="speed" label="Speed"/>
        <PotionType id="fire" label="Fire Tonic"/>
        <PotionType id="ice" label="Ice Tonic"/>
        <PotionType id="thunder" label="Thunder Tonic"/>
        <PotionType id="shadow" label="Shadow Tonic"/>
        <PotionType id="sight" label="Sight Enhancer"/>
        <PotionType id="alertness" label="Alertness Enhancer"/>
        <PotionType id="poison" label="Poison Cure"/>
      </div>
    </>
  }

  return <>
    <fieldset className='flex'>
      <legend>
        Potion Info
      </legend>
        {getRadios()}
    </fieldset> 
  </>
}


export default PotionInfo;