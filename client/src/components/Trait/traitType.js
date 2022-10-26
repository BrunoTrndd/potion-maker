import React from "react";
const images = require.context('../../img/traits')

function TraitType (props) {
  const loadImage = imageName => (images(`./${imageName}`).default);

  return <>
    <div className="trait">
      <img src={loadImage(props.img)} alt="" />
    </div> 
  </>
}

export default TraitType;