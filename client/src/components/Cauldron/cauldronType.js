import React from "react";
const images = require.context('../../img/cauldrons')

function CauldronType({info, click}) {
  const loadImage = imageName => (images(`./${imageName}.png`).default);

  const handleClick = () => {
    click(info)
  }

  return <>
      <img src={loadImage(info.img)} alt="" onClick={handleClick} height="60px" width="60px"/>
  </>
}

export default CauldronType;