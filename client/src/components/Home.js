// log in and sign up button
//pic maybe
//description
//import PlantsList from './PlantsList'
import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Button from './Button'
import logo from '../WaterMyPlants.svg'

//console.log(props)
const HomeContainer = styled.div`
width: 100%;
height: 100vh;
x-overflow:hidden;
y-overflow:hidden;

& .logo{
  position:absolute;
  z-index:3;
  width:80%;
  height:auto;
  bottom:20vh;

  
};



& p{
  font-family:${props=>props.theme.font.body};
  color: ${props=> props.theme.color.hover};
  text-align: center;
  position: relative;
  margin-top: 2rem;
  right: 2%;
};

& span{
font-weight: 600;
cursor: pointer;
};

& button{
  transform-origin: center center;
  left:50%;
  transform: translate(-50%);
  position:relative;
  align-object:center;

  z-index:3;

  
}

& .imgContainer{
width:100%;
height: 80vh;
background-color:rgba(117,172,73,.25);
margin-bottom:-1.5rem;

& div{
  width:100%;
  height:100%;

  & img{
    width:inherit;
    height:inherit;
    object-fit:cover;
    opacity:.2;
  }
}
  
}


}`



export default function Home() {
  const history = useHistory();

  const routeToRegister = () => {
    history.push("/RegisterForm");
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  return (
    <div>
      <HomeContainer>
      
      <div className='imgContainer'>
      <img src={logo} className='logo' alt='Water My Plants logo.svg'/>
      <div><img alt='variety of plants background' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plants-in-pots-royalty-free-image-1574464255.jpg?crop=1.00xw:0.752xh;0,0.0649xh&resize=980:*'/></div>
      </div>
      <Button onClick={handleLoginClick} innerText={'login'}/>
      <p> don't have an account? | <span onClick={routeToRegister}>register</span></p>
        
      
      </HomeContainer>
    </div>
  );
}
