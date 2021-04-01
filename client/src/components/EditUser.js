import React, { useState, useEffect } from "react";
import registerFormSchema from "../validation/RegisterFormSchema";
import * as yup from "yup";
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
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name='username'
            type='text'
            value={userInfo.username}
            onChange={onChange}
            placeholder='Current Username'
          />
        </label>

        <label>
          Phone Number
          <input
            name='phone'
            type='tel'
            value={userInfo.phone}
            onChange={onChange}
            placeholder='Current Phone Number'
          />
        </label>

        <button>Submit Changes</button>
      </form>
      <button onClick={() => push("/user")}>Cancel</button>
    </>
  );
}
