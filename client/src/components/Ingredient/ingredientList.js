import React, {useState, useEffect} from "react";
import {getAll, getIngredientsByFilter} from '../../services/IngredientService'
import Ingredient from './ingredient'


function IngredientList(props) {
  const [ingredients, setIngredients] = useState([])
  useEffect(() => {
    fetchIngredients();
  }, [props.filter]);

  const getSearchMethod = () => {
    if(props.filter) 
      return getIngredientsByFilter
    return getAll
  }

  const fetchIngredients = async () => {
    const response = await getSearchMethod()(props.filter);
    setIngredients(response);
  }
  
  return <>
    {
      ingredients && Object.keys(ingredients).map( (ing, ind) =>{
        return (
          <Ingredient 
            key={ind}
            info={ingredients[ing]}
            handleClick={props.handleIngredientClick}
            >
          </Ingredient>
        )
      })
    }
  </>

}

export default IngredientList;