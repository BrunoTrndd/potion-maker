import React from "react";
import "./ingredient.css"
const images = require.context('../../img')

function Ingredient(props) {
  const loadImage = imageName => (images(`./${imageName}`).default);
  function handleClick() {
    props.handleClick(props)
  }

  return <>
    <div className="ingredient" onClick={handleClick}>
      <img src={loadImage(props.info.img)} alt="" width={props.width || "100"} height={props.height || '100'} />
    </div>
  </>
}

export default Ingredient;