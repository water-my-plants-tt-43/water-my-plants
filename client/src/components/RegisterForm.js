import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from '../WaterMyPlantsGreen.svg'
import Button from './Button'
import {FormRouteContainer} from './FormContainer'
import axios from "axios";
import registerFormSchema from "../validation/RegisterFormSchema";
import * as yup from "yup";



const initialFormValues = {
  username: "",
  password: "",
  // email: "",
  phone: "",
};
const initialFormErrors = {
  username: "",
  password: "",
  // email: "",
  phone: "",
};

export default function RegisterForm(props) {
  const history = useHistory();
  const {push} = history;

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const updateForm = (name, value) => {
    yup
      .reach(registerFormSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onChange = (evt) => {
    // console.log(evt.target);
    const { name, value } = evt.target;
    updateForm(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://water-my-plants-tt43.herokuapp.com/api/auth/register",
        formValues
      )
      .then((res) => {
        console.log(res);
        push('/login');
      })
      .catch((err) => console.log(err.response));
    setFormValues(initialFormValues);
  };

  return (
    <FormRouteContainer>
      <img src={logo} className='logo' alt='Water My Plants logo green'/>
      <h1>Register</h1>
      <div className='formContainer'>
      <form onSubmit={onSubmit}>
    

      <label htmlFor='username'>username</label>
        <input
          name='username'
          type='text'
          value={formValues.username}
          onChange={onChange}
          placeholder='Username'
        />
    

      <label htmlFor='password'>password</label>
        <input
          name='password'
          type='password'
          value={formValues.password}
          onChange={onChange}
          placeholder='Password'
        />
    

      {/* <label>
        Email
        <input
          name='email'
          type='email'
          value={formValues.email}
          onChange={onChange}
          placeholder='Email'
        />
      </label> */}

      <label htmlFor='phone'>phone</label>
        <input
          name='phone'
          type='tel'
          value={formValues.phone}
          onChange={onChange}
          placeholder='Phone Number'
        />

      <div className='errors'>
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
        {/* <div>{formErrors.email}</div> */}
        <div>{formErrors.number}</div>
      </div>
    
      <div className='button'><Button innerText={'register'}/> </div>
    </form>
      </div>

      <p><span onClick={()=>push('/')}>back to home</span> | <span onClick={()=>push('/login')}>login</span></p>
    </FormRouteContainer>
  );
}
