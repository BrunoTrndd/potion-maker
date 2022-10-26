import React, { useCallback, useState } from 'react';
import AreaType from '../Area/area';
import Cauldron from '../Cauldron/cauldron';
import IngredientList from '../Ingredient/ingredientList';
import './main.css'

function Main() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientClick = useCallback((ingredient) => {
    let batata = [];
    batata = selectedIngredients;
    batata.push(ingredient)
    setSelectedIngredients(batata)
  }, [selectedIngredients])

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
        {/* <TraitType></TraitType> */}
        {/* <PotionSize></PotionSize> */}
      </div>
      <div className='bigBox'>
        <IngredientList handleIngredientClick={handleIngredientClick}></IngredientList>
      </div>
    </div>
  </>
}

export default Main;