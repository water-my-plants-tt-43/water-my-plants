import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const IndividualPlant = (props) => {
  // const {
  //   id,
  //   nickname,
  //   // species,
  //   water_frequency,
  //   // image,
  //   // instructions,
  // } = props.plant;

  const { plantId } = useParams();
  const [plant, setPlant] = useState({});
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth("https://water-my-plants-tt43.herokuapp.com")
      .get(`/api/users/${localStorage.getItem("user")}/plants/${plantId}`)
      .then((res) => setPlant(res.data[0]))
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div className='plant-list-item'>
      <div className='plant-view'>
        <div className='view-header'>
          <h1>{plant.nickname}</h1>
          <p>{plant.last_water && plant.last_water.slice(0,10)}</p>
          <p>{plant.species}</p>
          <p>Created By: {plant.user}</p>
          <p>Days between watering: {plant.water_frequency}</p>
          <button onClick={() => push(`/plant/${plant.user_plants_id}/edit`)}>
            Edit {plant.nickname}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualPlant;
