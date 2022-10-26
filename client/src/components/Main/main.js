import React, { useState } from 'react';
import AreaType from '../Area/areaType';
import Cauldron from '../Cauldron/cauldron';
import IngredientList from '../Ingredient/ingredientList';
import TraitList from '../Trait/traitList';
import './main.css'

function Main() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  function handleIngredientClick(ingredient) {
    setSelectedIngredients([...selectedIngredients, ingredient.info])
  }
  
  return <>
    <div className='content grid grid-3-1'>
      <div className='box leftBox'>
        {/* <CauldronType></CauldronType> */}
        {/* <PotionType></PotionType> */}
      </div>
      <div className='box centerBox'>
        {/* <Logo></Logo> */}
        <Cauldron selectedIngredients={selectedIngredients} setIng={setSelectedIngredients}></Cauldron>
      </div>
      <div className='box rightBox'>
        <AreaType></AreaType> 
        <TraitList></TraitList> 
        {/* <PotionSize></PotionSize> */}
      </div>
      <div className='bigBox'>
        <IngredientList handleIngredientClick={handleIngredientClick}></IngredientList>
      </div>
    </div>
  </>
}

export default Main;