import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const host = "https://water-my-plants-tt43.herokuapp.com";

const initialState = {
  species: "",
  nickname: "",
  water_frequency: "",
};

const PlantsList = (props) => {
  // const { userId } = props;
  // console.log(userId);
  const { push } = useHistory();
  const [plants, setPlants] = useState([]);
  const [disabled, setDisabled] = useState([plants.length][false]); // 2d array for each edit button for every plant that exists
  const [formvalues, setFormvalues] = useState(initialState);

  useEffect(() => {
    axiosWithAuth(host)
      //   .get(`/api/users/${userId}/plants`)
      .get(`/api/users/${localStorage.getItem("user")}/plants/`)
      .then((res) => {
        console.log(res.data);
        setPlants(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const isEditing = (index) => {
    const boolean = disabled[index] === true ? false : true;
    setDisabled([index][boolean]);
  };

  const handleChange = (event) => {
    setFormvalues({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /* todo */
  };

  const logout = () => {
    localStorage.removeItem("token");
    props.setUserId(null);
    push("/");
  };

  return (
    <div className='plants-container'>
      <div className='temp-style-div'>-----</div>
      <button onClick={() => push("/newplant")}>New Plant</button>
      {plants.map((plant, index) => {
        return (
          <div className='plant-container' key={index}>
            <div className='temp-style-div'>-----</div>
            <div className='plant-species'>Species: {plant.species}</div>

            <div className='plant-nickname'>Nickname: {plant.nickname}</div>
            <div className='plant-water_frequency'>
              Water Frequency: {plant.water_frequency} times/week
            </div>
            <div className='plant-user'>Created By: {plant.user}</div>

            <button onClick={() => push(`/plant/${plant.user_plants_id}`)}>
              View Plant
            </button>
          </div>
        );
      })}

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default PlantsList;
