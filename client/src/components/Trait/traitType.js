import React, {useState} from "react";
const images = require.context('../../img/traits')

function TraitType (props) {
  const loadImage          = imageName => (images(`./${imageName}`).default);
  const traitName          = props.img.split('_')[0];
  const [currentTraitStatus, setCurrentTraitStatus] = useState(props.img.split('_')[1].split('.')[0]);

  if(props.clickAction) {
    const refreshTraitState = () => {
      let newStatus = ''
      if(currentTraitStatus === 'neutral') {
        newStatus = 'good'
      } else if(currentTraitStatus === 'good') {
        newStatus = 'bad'
      } else {
        newStatus = 'neutral'
      }
      let newFilter = {...props.filter}
      newFilter[traitName] = newStatus
      setCurrentTraitStatus(newStatus)
      props.clickAction(newFilter);
    }
    
    const getImage = () => {
      return loadImage(traitName+"_"+currentTraitStatus+".png");
    }

    return <>
      <div className="trait filter" onClick={refreshTraitState}>
        <img src={getImage()} alt="" />
      </div> 
    </>
  } else {
    return <>
      <div className="trait">
        <img src={loadImage(props.img)} alt="" />
      </div> 
    </>
  }
}

export default TraitType;