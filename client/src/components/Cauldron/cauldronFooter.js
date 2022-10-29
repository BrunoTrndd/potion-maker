import React from "react";
import CauldronInfo from '../Cauldron/cauldronInfo';
import TraitList from "../Trait/traitList";

function CauldronFooter(props) {
  return <>
    <div className="cauldronFooter">
      <TraitList selectedIngredients={props.selectedIngredients}></TraitList> 
      <CauldronInfo selectedIngredients={props.selectedIngredients}></CauldronInfo>
    </div>
  </>
}

export default CauldronFooter