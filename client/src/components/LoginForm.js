import React, { useState } from "react";
import Button from './Button'
import styled from 'styled-components'
import LoginFormSchema from "../validation/LoginFormSchema";
import * as yup from "yup";
import axios from "axios";
import logo from '../WaterMyPlantsGreen.svg'
import { useHistory } from "react-router-dom";


const LoginContainer = styled.div`
width:100%;
height:100vh;
background: ${props=> props.theme.color.background};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content:center;

& .logo{
  position:absolute;
  z-index:0;
  left:0;
  width:80%;
  height:auto;
  bottom:0;
  mix-blend-mode: multiply;
  opacity:.2;

  
};

  & p{
    color: ${props=>props.theme.color.hover};
    margin-top:4rem;
    font-weight: 500;
    font-size:1rem;
    text-align: center;
    position:relative;
  z-index:2;

    & span{
      cursor: pointer;
    }

  }

  & h1{
    font-family: ${props=>props.theme.font.display};
    font-weight:400;
    font-size: 3rem;
    color: ${props=>props.theme.color.hover};
  };

& .formContainer{
  position:relative;
  z-index:2;
  padding:2rem;
  box-shadow: ${props=>props.theme.shadow};
  background:white;
  max-height: 200px;
  width: 25%;
  

  & form{
    width:80%;
    margin:auto;
    margin-top:1rem;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .errors{
      color:crimson;
      font-size: .9rem;
    }
    
  };


  & label{
    font-family: ${props=>props.theme.font.display};
    font-weight:400;
    font-size:1.4rem;
    color: ${props=>props.theme.color.grayDark};
    width:100%;
    
  };

  & input{
    font-family: ${props=>props.theme.font.body};
    background: ${props=>props.theme.color.grayLight};
    padding: 1rem;
    border:none;
    width:100%;
    outline:none;
    
  }

  & button{
    position:relative;
    width: 100%;
    bottom: -30px;
  }
}


`

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
        setUserId(res.data.user_id);
        localStorage.setItem("token", res.data.token);
        push("/plants");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <LoginContainer>
      <img src={logo} className='logo'/>
      <h1>Login</h1>
      <div className = 'formContainer'>
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

          <Button innerText={'Login'}/>
</form>
      </div>

      <p><span onClick={()=>push('/')}>back to home</span> | <span onClick={()=>push('/RegisterForm')}>register</span></p>
    </LoginContainer>
  );
}
