import React, { useState } from 'react';
import AreaType from '../Area/areaType';
import Cauldron from '../Cauldron/cauldron';
import CauldronFooter from '../Cauldron/cauldronFooter';
import CauldronTypeList from '../Cauldron/cauldronTypeList';
import IngredientList from '../Ingredient/ingredientList';
import PossiblePotions from '../Ingredient/possiblePotions';
import PotionInfo from '../Potion/potionInfo';
import TraitList from '../Trait/traitList';

import './main.css'

function Main() {
  
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedCauldron, setSelectedCauldron] = useState({});
  const [ingredientsResult, setIngredientsResult] = useState([])

  const [filter, setFilter] = useState({
    pallate:false,
    stomach:false,
    smell:false,
    look:false,
    hear:false,
  });

  function handleIngredientClick(ingredient) {
    setSelectedIngredients([...selectedIngredients, ingredient.info])
  }

  function handleIngredientLineClick(ingredientLine) {
    setSelectedIngredients([...ingredientLine]);
  }

  function handleClickCalculatePotion() {

  }
  
  return <>
    <div className='content grid grid-3-1'>
      <div className='box leftBox flex'>
        <CauldronTypeList setSelectedCauldron={setSelectedCauldron}></CauldronTypeList>
        <PotionInfo setIngredientsResult={setIngredientsResult}></PotionInfo>
      </div>
      <div className='box centerBox flex'>
        {/* <Logo></Logo> */}
        <Cauldron selectedIngredients={selectedIngredients} setIng={setSelectedIngredients}></Cauldron>
        <CauldronFooter selectedIngredients={selectedIngredients}></CauldronFooter>
      </div>
      <div className='box rightBox flex'>
        <AreaType></AreaType> 
        <TraitList clickAction={setFilter} filter={filter}></TraitList> 
        {/* <PotionSize></PotionSize> */}
      </div>
      <div className='bigBox'>
        <IngredientList handleIngredientClick={handleIngredientClick} filter={filter}></IngredientList>
      </div>
      <div className='teste'>
        <PossiblePotions click={handleIngredientLineClick} ingredientsResult={ingredientsResult} setIngredientsResult={setIngredientsResult}></PossiblePotions>
      </div>
    </div>
  </>
}

export default Main;