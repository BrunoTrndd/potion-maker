import React from "react";
import "./ingredient.css"
const images = require.context('../../img')

function Ingredient(props) {
  const loadImage = imageName => (images(`./${imageName}`).default);

  return <>
    <div className="ingredient" onClick={()=>props.handleClick(props)}>
      <img src={loadImage(props.img)} alt="" width="100" height='100'/>
    </div>
  </>
}

export default Ingredient;