import React, { useState } from "react";
import Button from "./Button";
import { FormRouteContainer } from "./FormContainer";
import LoginFormSchema from "../validation/LoginFormSchema";
import * as yup from "yup";
import axios from "axios";
import logo from "../WaterMyPlantsGreen.svg";
import { useHistory } from "react-router-dom";

// function Login(){
//   const [loginData, setLoginDate] = useState ({
//     userInput : '',
//     userPassword: ''
//   });

// const onInputChange = event => {
//   setLoginDate ({
//     ...loginData,
//     [evet.target.name]: event.target.name,
//   });

// };

//   return(
//   <div className="Login">
//     <form>
//       <label>User
//         <input name = 'userName' onChange ={onInputChange}
//          placeholder="User"
//          id='userInput'
//          type='text'

//         />
//       <br/>
//       </label>
//       <label>Password
//         <input name = 'userPassword' onChange ={onInputChange}
//         placeholder='Password'
//         id='userPassword'
//         type='text'
//         />
//         <br/>
//       </label>
//        <input type="submit"/>
//     </form>
//   </div>
//   )
// }

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  user: "",
  password: "",
};

export default function LoginForm(props) {
  const { setUserId } = props;
  const { push } = useHistory();
  const [formvalues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const updateForm = (name, value) => {
    yup
      .reach(LoginFormSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formvalues,
      [name]: value,
    });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://water-my-plants-tt43.herokuapp.com/api/auth/login",
        formvalues
      )
      .then((res) => {
        console.log(res.data.user_id);
        // setUserId(res.data.user_id);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user_id);
        push("/plants");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <FormRouteContainer>
      <img src={logo} className='logo' alt='Water My Plants logo green' />
      <h1>Login</h1>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>username </label>
          <input
            name='username'
            type='text'
            value={formvalues.username}
            onChange={onChange}
            placeholder='username'
          />

          <label htmlFor='password'>password</label>
          <input
            name='password'
            type='password'
            value={formvalues.password}
            onChange={onChange}
            placeholder='password'
          />

          <div className='errors'>
            <div>{formErrors.username}</div>
            <div>{formErrors.password}</div>
          </div>

          <Button innerText={"Login"} />
        </form>
      </div>

      <p>
        <span onClick={() => push("/")}>back to home</span> |{" "}
        <span onClick={() => push("/RegisterForm")}>register</span>
      </p>
    </FormRouteContainer>
  );
}
