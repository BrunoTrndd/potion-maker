import React from "react";
const images = require.context('../img')


function Ingredient(props) {
  const loadImage = imageName => (images(`./${imageName}`).default);

  return <>
    <div className="grid grid-columns-12">
      <img src={loadImage(props.img)} alt="" width="100" height='100'/>
    </div>
  </>
}

export default Ingredient;