import React, {useState} from 'react';
import registerFormSchema from '../validation/RegisterFormSchema';
import * as yup from "yup";


const initialFormValues = {
    username: "",
    password: "",
    phone: "",
  };
  const initialFormErrors = {
    username: "",
    password: "",
    phone: "",
  };

export default function EditUser() {

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

    return(
        <form>

            <label>
                Username
                <input
                  name='username'
                  type='text'
                  value={formValues.username}
                  onChange={onChange}
                  placeholder='Current Username'
                  />
            </label>

            <label>
                Password
                <input
                  name='password'
                  type='password'
                  value={formValues.password}
                  onChange={onChange}
                  placeholder='Current Password'
                  />
            </label>

            <label>
                Phone Number
                <input
                  name='phone'
                  type='tel'
                  value={formValues.phone}
                  onChange={onChange}
                  placeholder='Current Phone Number'
                  />
            </label>

            <button>Submit Changes</button>

        </form>
    );
};