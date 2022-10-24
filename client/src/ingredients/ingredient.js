import React from "react";
import feyberry_img from '../img/feyberry.png';
import cauldron from '../img/cauldron.png';

export default function ingredient(props) {
  return <>
    <img src={cauldron} alt=""/>
    <div className="grid absolute grid-columns-12">
      <img src={feyberry_img} alt="" width="45" height='45'/>
    </div>
  </>
}