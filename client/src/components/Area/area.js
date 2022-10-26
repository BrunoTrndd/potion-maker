import React from "react";
import "./area.css";


function AreaType() {
  return <>
    <div className="areaFieldset">
      <fieldset>
        <legend>Areas</legend>
        <div className="areaContent">
          <div className="areaItem">
            <input type="checkbox"></input>
            <label>Enchanted Forest</label>
          </div>
          <div className="areaItem">
            <input type="checkbox"></input>
            <label>Bone Wastes</label>
          </div>
          <div className="areaItem">
            <input type="checkbox"></input>
            <label>Mushroom Mire</label>
          </div>
          <div className="areaItem">
            <input type="checkbox"></input>
            <label>????</label>
          </div>
          <div className="areaItem">
            <input type="checkbox"></input>
            <label>????</label>
          </div>
          <div className="areaItem">
            <input type="checkbox"></input>
            <label>????</label>
          </div>
        </div>
      </fieldset>
    </div>
  </>
}


export default AreaType;