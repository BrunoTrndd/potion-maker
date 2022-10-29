import React, { useEffect, useState } from "react";
import { getAll } from '../../services/CauldronService'
import CauldronType from "./cauldronType";

function CauldronTypeList(props) {
  const [cauldrons, setCauldrons] = useState({})
  useEffect(() => {
    fetchCauldrons();
  }, []);

  const fetchCauldrons = async () => {
    const response = await getAll();
    setCauldrons(response);
  }

  return <>
    <fieldset className="fieldsetCauldronType">
      <legend>Cauldron Type</legend>
      {
        cauldrons && Object.keys(cauldrons).map((index) => {
          return <div className="cauldronType">
            <CauldronType info={cauldrons[index]} click={props.setSelectedCauldron}></CauldronType>
          </div>
        })
      }
    </fieldset>
  </>
}


export default CauldronTypeList;