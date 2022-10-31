import React from 'react';
import Ingredient from './ingredient';

function IngredientLine(props) {

  const setIngredients = () => {
    props.click(props.ingredientList);
  }

  return <>
      <div onClick={setIngredients}>
        {
          props.ingredientList.map((ing, i)=>{
            return <Ingredient
            key={i}
            info={ing}
            handleClick={()=>{}}
            width={40}
            height={40}
            >
            </Ingredient>
          })
        }
      </div>
    <br/>
  </>
}
export default IngredientLine;