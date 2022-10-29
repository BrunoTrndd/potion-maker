import React from "react";
const images = require.context('../../img/values')

function CauldronInfo(props) {
  const loadImage = imageName => (images(`./${imageName}.png`).default);
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let e = 0;
  let totalMagimins = 0;
  
  Object.keys(props.selectedIngredients).map((keys) => {
    a += props.selectedIngredients[keys].A
    b += props.selectedIngredients[keys].B
    c += props.selectedIngredients[keys].C
    d += props.selectedIngredients[keys].D
    e += props.selectedIngredients[keys].E
  });

  totalMagimins = a + b + c + d + e;

  return <>
    <div className="flex">
      <fieldset className="cauldronInfoFieldset">
        <legend>Total Magimins</legend>
        <div className="cauldronInfo">
          <label>
            <img src={loadImage("A")} alt="" height="25" width="25"/> {a}
          </label>
        </div>
        <div className="cauldronInfo">
          <label>
            <img src={loadImage("B")} alt="" height="25" width="25"/> {b}
          </label>
        </div>
        <div className="cauldronInfo">
          <label>
            <img src={loadImage("C")} alt="" height="25" width="25"/> {c}
          </label>
        </div>
        <div className="cauldronInfo">
          <label>
            <img src={loadImage("D")} alt="" height="25" width="25"/> {d}
          </label>
        </div>
        <div className="cauldronInfo">
          <label>
            <img src={loadImage("E")} alt="" height="25" width="25"/> {e}
          </label>
        </div>
        <br/>
        <div className="cauldronInfo">
          <label>Total: {totalMagimins}</label>
        </div>
      </fieldset>
    </div>
  </>
}

export default CauldronInfo;