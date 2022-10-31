import React, { useEffect, useState } from "react";
import {getIngredientsTeste} from '../../services/IngredientService'
import IngredientLine from "./ingredientLine";


function PossiblePotions(props) {
  useEffect(() => {
    fetchIngredients();
  }, []);

  const getSearchMethod = () => {
    return getIngredientsTeste
  }

  const fetchIngredients = async () => {
    const response = await getSearchMethod()();
    props.setIngredientsResult(response);
  }
  
  return <>
    {
      props.ingredientsResult && props.ingredientsResult.map((e, i) => {
        return <IngredientLine ingredientList={e} click={props.click}/>
      })
    }
  </>
}

export default PossiblePotions;