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
      <img src={loadImage(props.img)} alt="" width="100" height='100' />
    </div>
  </>
}

export default Ingredient;