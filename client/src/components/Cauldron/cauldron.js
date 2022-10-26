import React from "react";
import Ingredient from "../Ingredient/ingredient";
import './cauldron.css'

function Cauldron(props) {

  function removeItem(item) {
    let items = [...props.selectedIngredients]
    items.splice(item.index, 1)
    props.setIng(items)
  }
  
  function renderContent() {
    if (props.selectedIngredients) {
      return props.selectedIngredients.map((ingredient, ind) => {
        return <Ingredient key={ind} info={ingredient} handleClick={removeItem} index={ind}></Ingredient>
      })
    }
  }

  return <>
    <div id='cauldron'>
      {renderContent()}
    </div>
  </>
}

export default Cauldron;