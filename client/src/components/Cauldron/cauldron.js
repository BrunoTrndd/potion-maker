import React, { useMemo } from "react";
import Ingredient from "../Ingredient/ingredient";
import './cauldron.css'

function Cauldron(props) {
  console.log(props)
  const batata = useMemo(() => {
    console.log(props.selectedIngredients)
    return props.selectedIngredients.map((ingredient, index) => {
      return <Ingredient img={ingredient.img}></Ingredient>
    }) 
  }, [props.selectedIngredients]);
  return <>
    <div id='cauldron'>
      {
        batata
      }
    </div>
  </>
}

export default Cauldron;