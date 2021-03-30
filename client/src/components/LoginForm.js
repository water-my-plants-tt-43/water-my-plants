import React, { useState } from 'react'
import LoginFormSchema from '../validation/LoginFormSchema'
import * as yup from 'yup'
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
  username:'',
  password:''
}

const initialFormErrors = {
  user:'Username!!!',
  password:'Password... or else'
}

export default function LoginForm() {
  const [formvalues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

    const updateForm = (name, value) => {
    yup
    .reach(LoginFormSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: '',
      });
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({
      ...formvalues, [name]: value
    })

  }
  const onChange = e => {
    const {name, value} = e.target
    updateForm (name, value)
  }
  return (
    <form onSubmit = {onsubmit}>
      <div className = 'errors'>
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
      </div>

      <label>
        Username
        <input
          name='username'
          type='text'
          value={formvalues.username}
          onChange={onChange}
          placeholder='Username'
          />
      </label>

      <label>
        Password
        <input
          name='password'
          type='text'
          value={formvalues.password}
          onChange={onChange}
          placeholder='Username'
          />
      </label>
      </form>
  )
}
