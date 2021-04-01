import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
    <div className='infoContainer'>
      <div className='info'>
        <h1>Hi! {userInfo.username}</h1>
        <h3>Username: {userInfo.username}</h3>
        <h3>Phone Number: {userInfo.phone}</h3>
      </div>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}
