import React from "react";
import TraitType from "./traitType";
import "./traitType.css";

function TraitList() {
  return <>
    <div className="traitFieldset">
      <fieldset>
        <legend>Traits</legend>
        <TraitType img="pallate_neutral.png"></TraitType>
        <TraitType img="stomach_neutral.png"></TraitType>
        <TraitType img="smell_neutral.png"></TraitType>
        <TraitType img="look_neutral.png"></TraitType>
        <TraitType img="hear_neutral.png"></TraitType>
      </fieldset>
    </div>
  </>
}

export default TraitList;