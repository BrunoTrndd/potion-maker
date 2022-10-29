import React from "react";
import TraitType from "./traitType";
import "./traitType.css";

function TraitList(props) {
  const NEUTRAL = 'neutral';
  const GOOD = 'good';
  const BAD = 'bad';

  let cauldronValues = {
    pallate:0,
    stomach:0,
    smell:0,
    look:0,
    hear:0,
  }

  let decideTraitValue = (trait) => {
    switch(true) {
      case trait === GOOD:
        return 1
      case trait === BAD:
        return -1
      default:
        return 0
    }
  }

  props.selectedIngredients && props.selectedIngredients.map((ing) => {
    cauldronValues.pallate += decideTraitValue(ing.pallate);
    cauldronValues.stomach += decideTraitValue(ing.stomach);
    cauldronValues.smell += decideTraitValue(ing.smell);
    cauldronValues.look += decideTraitValue(ing.look);
    cauldronValues.hear += decideTraitValue(ing.hear);
    return 1;
  });

  let getTrait = (trait) => {
    if(cauldronValues[trait] > 0)
      return trait + "_" + GOOD + ".png"
    if(cauldronValues[trait] < 0)
      return trait + "_" + BAD + ".png"
    return trait + "_" + NEUTRAL + ".png"
  }
  
  if(props.clickAction) {
    return <>
      <div className="traitFieldset">
        <fieldset>
          <legend>Traits</legend>
          <TraitType img="pallate_neutral.png" filterName="pallate" clickAction={props.clickAction} filter={props.filter}></TraitType>
          <TraitType img="stomach_neutral.png" filterName="stomach" clickAction={props.clickAction} filter={props.filter}></TraitType>
          <TraitType img="smell_neutral.png" filterName="smell" clickAction={props.clickAction} filter={props.filter}></TraitType>
          <TraitType img="look_neutral.png" filterName="look" clickAction={props.clickAction} filter={props.filter}></TraitType>
          <TraitType img="hear_neutral.png" filterName="hear" clickAction={props.clickAction} filter={props.filter}></TraitType>
        </fieldset>
      </div>
    </>
  } else {
    return <>
      <div className="traitFieldset">
        <fieldset>
          <legend>Traits</legend>
          <TraitType img={getTrait("pallate")}></TraitType>
          <TraitType img={getTrait("stomach")}></TraitType>
          <TraitType img={getTrait("smell")}></TraitType>
          <TraitType img={getTrait("look")}></TraitType>
          <TraitType img={getTrait("hear")}></TraitType>
        </fieldset>
      </div>
    </>
  }
}

export default TraitList;