import React, { useRef } from 'react';
import PotionField from './potionField';
import {getIngredientsTeste} from '../../services/IngredientService'

import './potionInfo.css';
import PotionType from './potionType';


function PotionInfo(props) {
  
  
  const fetchIngredients = async (filter) => {
    const response = await getIngredientsTeste(filter);
    props.setIngredientsResult(response);
  }

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

  const inputA = useRef(null);
  const inputB = useRef(null);
  const inputC = useRef(null);
  const inputD = useRef(null);
  const inputE = useRef(null);
  const inputMaxIng = useRef(null);

  const handleClick = () => {
    let maxMag = parseInt(inputA.current.value||0) + parseInt(inputB.current.value||0) +parseInt(inputC.current.value||0) +parseInt(inputD.current.value||0) + parseInt(inputE.current.value||0);
    fetchIngredients({
      A:inputA.current.value||0, 
      B:inputB.current.value||0, 
      C:inputC.current.value||0,
      D:inputD.current.value||0,
      E:inputE.current.value||0,
      maxIng:inputMaxIng.current.value||0,
      maxMag:maxMag});
  }

  return <>
    <fieldset className='flex flex-direction-column'>
      <legend>
        Potion Info
      </legend>
        {/* {getRadios()} */}
        <div>
          <div className='inputRow'>
            <label>A: </label>
            <input type="number" ref={inputA} id="inputA" name="inputA"></input>
          </div>
          <div className='inputRow'>
            <label>B: </label>
            <input type="number" ref={inputB} id="inputB" name="inputB"></input>
          </div>
          <div className='inputRow'>
            <label>C: </label>
            <input type="number" ref={inputC} id="inputC" name="inputC"></input>
          </div>
          <div className='inputRow'>
            <label>D: </label>
            <input type="number" ref={inputD} id="inputD" name="inputD"></input>
          </div>
          <div className='inputRow'>
            <label>E: </label>
            <input type="number" ref={inputE} id="inputE" name="inputE"></input>
          </div>
          <div className='inputRow'>
            <label>Max Ingredients: </label>
            <input type="number" ref={inputMaxIng} id="inputE" name="inputE"></input>
          </div>
          <button onClick={handleClick}>Calculate</button>
        </div>
    </fieldset> 
  </>
}


export default PotionInfo;