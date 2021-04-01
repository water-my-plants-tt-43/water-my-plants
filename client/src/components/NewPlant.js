import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
//import * as Yup from "yup";

// const plantSchema = Yup.object().shape({
//   nickname: Yup.string().required("Please enter a name"),
//   species: Yup.string(),
//   waterFrequency: Yup.number("Please enter a watering frequency").required(),
//   img: Yup.string(),
//   instructions: Yup.string(),
// });

// const fields = [
//   { id: "nickname", type: "text", label: "Nickname" },
//   { id: "species", type: "text", label: "Species" },
//   { id: "waterFrequency", type: "number", label: "Water Every # Days" },
//   { id: "img", type: "text", label: "Image URL" },
//   { id: "instructions", type: "textarea", label: "Special Instructions" },
// ];

// var init = {};
// fields.forEach((field) => (init[field.id] = ""));

const initialState = {
  species: '',
  nickname: '',
  water_frequency: ''
}

const AddPlant = (props) => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialState);
  const [disabled, setDisabled] = useState(true);

  const handleCancel = (e) => {
    e.preventDefault();
    setFormValues(initialState);
    push('/plants');
    setDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth('https://water-my-plants-tt43.herokuapp.com')
      .post(`/api/users/${localStorage.getItem("user")}/plants`, formValues)
      .then(res => {
        console.log('New Plant: ', res);
        push('/plants');
      })
      .catch(err => console.log(err.response))

    setFormValues(initialState);
    setDisabled(true);
  };

  const handleChange = event => {
    setFormValues({
      ...formValues, 
      [event.target.name]: event.target.value
    })
    setDisabled(false);
  };

  return (
    <div className='form-container'>
      <h2>Add New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          name='species'
          type='text'
          value={formValues.species}
          onChange={handleChange}
          placeholder='Species'
        />
        <input
          name='nickname'
          type='text'
          value={formValues.nickname}
          onChange={handleChange}
          placeholder='Nickname'
        />
        <input
          name='water_frequency'
          type='text'
          value={formValues.water_frequency}
          onChange={handleChange}
          placeholder='Water Frequency'
        />
        <button type='submit' disabled={disabled}>
          Add Plant
        </button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default AddPlant;
