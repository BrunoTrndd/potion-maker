import React, {useState, useEffect} from "react";
import {getAll} from '../../services/IngredientService'
import Ingredient from './ingredient'


function IngredientList(props) {
  const [ingredients, setIngredients] = useState([])
  useEffect(() => {
    fetchIngredients();
  }, []);
  useEffect(() => {
  }, [ingredients]);

  const getSearchMethod = () => {
    return getAll
  }

  const fetchIngredients = async () => {
    const response = await getSearchMethod()();
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