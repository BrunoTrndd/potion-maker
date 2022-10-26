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
            a={ingredients[ing].a}
            b={ingredients[ing].b}
            c={ingredients[ing].c}
            d={ingredients[ing].d}
            e={ingredients[ing].e}
            pallate={ingredients[ing].pallate}
            stomach={ingredients[ing].stomach}
            smell={ingredients[ing].smell}
            look={ingredients[ing].look}
            hear={ingredients[ing].hear}
            area={ingredients[ing].area}
            img={ingredients[ing].img}
            handleClick={props.handleIngredientClick}
            >
          </Ingredient>
        )
      })
    }
  </>

}




export default IngredientList;