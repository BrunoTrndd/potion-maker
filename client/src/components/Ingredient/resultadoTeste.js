import React, { useEffect, useState } from "react";
import {getIngredientsTeste} from '../../services/IngredientService'
import Ingredient from "./ingredient";


function ResultadoTeste() {
  const [ingredientsResult, setIngredientsResult] = useState([])
  useEffect(() => {
    fetchIngredients();
  }, []);

  const getSearchMethod = () => {
    return getIngredientsTeste
  }

  const fetchIngredients = async () => {
    const response = await getSearchMethod()();
    setIngredientsResult(response);
  }
  
  return <>
    {
      ingredientsResult && ingredientsResult.map((e, i) => {
        return e.map((ing, i)=>{
          if(!ing){
            return;
          }
          return (
            <Ingredient 
              key={i}
              info={ing}
              handleClick={()=>{}}
              >
            </Ingredient>
          )
        })
      })
    }
  </>
}

export default ResultadoTeste;