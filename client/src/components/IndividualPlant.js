//detials
import React from "react";
import { connect } from "react-redux";

const PlantView = (props) => {
  const {
    id,
    nickname,
    // species,
    water_frequency,
    // image,
    // instructions,
  } = props.plant;

  return (
    <div className='plant-list-item'>
      <div className='plant-view' onClick={togglePlant}>
        <div className="view-header">
          <h3>{nickname}</h3>
          <p>Watered me {water_frequency} times a week!</p>
        </div>
        <img
          alt='plant'
        />
      </div>
      <PlantView
        id={id}
        payload={props.plant}
      />
    </div>
  );
};


export default connect(PlantView);
