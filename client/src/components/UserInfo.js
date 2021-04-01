import React, { useEffect, useState } from "react";
import Button from './Button'
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components'

const Wrapper= styled.div`
width:100%;
height:80vh;
overflow:hidden;
display: flex;
justify-content:center;
align-items:center;
font-family:${props=>props.theme.font.body};
font-weight:400;
color: ${props=>props.theme.color.grayDark};

& button{
  font-size: 1.2rem;
}

& .username{
  
  width:70%;
  position:absolute;
  z-index: -1;
  color: ${props=>props.theme.color.teal};
  left:0;
  margin:0;
  padding:0;
  opacity:.15;
  top:50%;
  transform-origin: center center;
  transform: translate(0,-50%);

  & h1{
  font-family:${props=>props.theme.font.display};
  font-weight:400;
  width:100%;
  font-size:15rem;
  margin:0;
  padding:0;
  }

}
`

const host = "https://water-my-plants-tt43.herokuapp.com";

const initialUser = {
  username: "",
  phone: "",
};

export default function UserInfo() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState(initialUser);

  useEffect(() => {
    axiosWithAuth(host)
      .get(`/api/users/${localStorage.getItem("user")}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  const handleEditClick = () => {
    history.push("/user/edit");
  };

  return (
    <Wrapper>

      <div className='username'><h1>{userInfo.username}</h1></div>

      <div className='info'>
        <h3>Username: {userInfo.username}</h3>
        <p>Phone Number: {userInfo.phone}</p>
        <Button onClick={handleEditClick} innerText={'Edit My Profile'}/>
      </div>
      
    </Wrapper>
  );
}
