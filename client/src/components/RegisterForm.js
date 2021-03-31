import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import registerFormSchema from '../validation/RegisterFormSchema'
import * as yup from 'yup'


const initialFormValues = {
    username:'',
    password:'',
    email:'',
    number:'',
  }
  const initialFormErrors = {
    username:'',
    password:'',
    email:'',
    number:'',
  }


export default function RegisterForm(props) {
    const history = useHistory()

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const updateForm = (name, value) => {
        yup
        .reach(registerFormSchema, name)
        .validate(value)
        .then(() => {
          setFormErrors({...formErrors, [name]: '',
          });
        })
        .catch((err) => {
          setFormErrors({...formErrors, [name]: err.errors[0]})
        })
      setFormValues({
        ...formValues, [name]: value
        })
      }

    const onChange = evt => {
        console.log(evt.target)
        const {name, value} = evt.target
        updateForm(name, value)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        axios.post('https://water-my-plants-tt43.herokuapp.com/api/auth/register', formValues)
            .then(res => {
                //console.log(res)
                history.push('/login')
                

            })
            .catch(err=> console.log(err))
        setFormValues(initialFormValues)
    }

    return (
        <form onSubmit = {onSubmit}>
            <div className='errors'>
                <div>{formErrors.username}</div>
                <div>{formErrors.password}</div>
                <div>{formErrors.email}</div>
                <div>{formErrors.number}</div>
            </div>

            <label>
                Username
                <input 
                    name='username'
                    type='text'
                    value={formValues.username}
                    onChange={onChange}
                    placeholder='Username'
                />
            </label>

            <label>
                Password
                <input 
                    name='password'
                    type='password'
                    value={formValues.password}
                    onChange={onChange}
                    placeholder='Password'
                />
            </label>

            <label>
                Email
                <input 
                    name='email'
                    type='email'
                    value={formValues.email}
                    onChange={onChange}
                    placeholder='Email'
                />
            </label>

            <label>
                Phone Number
                <input 
                    name='number'
                    type='tel'
                    value={formValues.number}
                    onChange={onChange}
                    placeholder='Phone Number'
                />
            </label>
            <button>Register</button>
        </form>
    )
}
