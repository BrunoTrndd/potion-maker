import React from "react";
import Ingredient from "../Ingredient/ingredient";
import './cauldron.css'

function Cauldron(props) {

  function renderContent() {
    if (props.selectedIngredients)
      return props.selectedIngredients.map((ingredient) => <Ingredient img={ingredient.img}></Ingredient>)
  }

  return <>
    <div id='cauldron'>
      {renderContent()}
    </div>
  </>
}

export default Cauldron;