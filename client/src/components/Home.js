// log in and sign up button
//pic maybe
//description
//import PlantsList from './PlantsList'
import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const routToRegister = () => {
    history.push("/RegisterForm");
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  return (
    <div>
      <h1>We have all the most amazing plants you will ever see</h1>
      <img
        src='https://media.istockphoto.com/vectors/collection-of-different-decor-house-indoor-garden-plants-in-pots-and-vector-id1009948020?s=170667a'
        alt=''
      />
      <p>
        These are some great details about this thing were building and how
        amazing the pictures of plants are. Do you want to water your plant and
        nickname them and do whatever plant people do. I don't know any of this.
        I actually don't like plants and I am never good at taking care of them
        and they die.
      </p>
      <button onClick={routToRegister} className='register-btn'>
        Register Now!
      </button>
      <button onClick={handleLoginClick} className='login-btn'>
        Login
      </button>
    </div>
  );
}
