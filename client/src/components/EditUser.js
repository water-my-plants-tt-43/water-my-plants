import React, { useState, useEffect } from "react";
import registerFormSchema from "../validation/RegisterFormSchema";
import * as yup from "yup";
import Button from './Button'
import {FormContainer} from './FormContainer'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const host = "https://water-my-plants-tt43.herokuapp.com";

const initialFormErrors = {
  username: "",
  phone: "",
};

const initialUser = {
  username: "",
  phone: "",
};

export default function EditUser() {
  const { push } = useHistory();
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [userInfo, setUserInfo] = useState(initialUser);

  useEffect(() => {
    axiosWithAuth(host)
      .get(`/api/users/${localStorage.getItem("user")}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err.response));
  }, []);

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
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    updateForm(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth(host)
      .put(`/api/users/${localStorage.getItem("user")}`, userInfo)
      .then((res) => {
        push("/user");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    
      <FormContainer>
        <h3>Edit My Profile</h3>
        <div className='formContainer'>
          
          <form onSubmit={handleSubmit}>
        <label>username</label>
          <input
            name='username'
            type='text'
            value={userInfo.username}
            onChange={onChange}
            placeholder='Current Username'
          />
        

        <label>phone</label>
          <input
            name='phone'
            type='tel'
            value={userInfo.phone}
            onChange={onChange}
            placeholder='Current Phone Number'
          />
       

        <div className='button'>
          <Button type='submit' innerText={'save'}/>
          <Button onClick={()=>push('/user')} innerText={'Cancel'}/>
        </div>

        
      </form>
      </div>
      
      </FormContainer>
    
  );
}
