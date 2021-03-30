// nickname
// species
// maybe a dropdown with a list or user input box
// water frequency
// override frequency
// input the day watered to update
// form type
// upload img type button --option
import React, { useState } from "react";
import { connect } from "react-redux";
import * as Yup from 'yup';

const plantSchema = Yup.object().shape({
  nickname: Yup.string().required("Please enter a name"),
  species: Yup.string(),
  waterFrequency: Yup.number("Please enter a watering frequency").required(),
  img: Yup.string(),
  instructions: Yup.string(),
});

const fields = [
  { id: "nickname", type: "text", label: "Nickname" },
  { id: "species", type: "text", label: "Species" },
  { id: "waterFrequency", type: "number", label: "Water Every # Days" },
  { id: "img", type: "text", label: "Image URL" },
  { id: "instructions", type: "textarea", label: "Special Instructions" },
];

var init = {};
fields.forEach((field) => (init[field.id] = ""));

const AddPlant = (props) => {

  const [values, setValues] = useState(init);
  const [disabled, setDisabled] = useState(true);

  const onCancel = (e) => {
    e.preventDefault();
    props.setEditing(false);
    setValues(init);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // new plant goes here
    const newPlant = values;
    console.log(newPlant);
    props.addPlant(newPlant);
    setValues(init);
    props.setEditing(false);
  };

 const getFormState = (state) => {
    setValues(state.values);
    setDisabled(state.disabled);
 }

  return (
    <div className="form-container">
      <h2>Add New Plant</h2>
      <form onSubmit={onSubmit}>
        <FormBuilder
          fields={fields}
          init={init}
          validationSchema={plantSchema}
          getFormState={getFormState}
        />
      <button type="submit" disabled={disabled}>
        Add Plant
      </button>
      </form>
    </div>
  )

};



export default AddPlant;
