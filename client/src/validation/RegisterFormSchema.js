import * as yup from 'yup'

const registerFormSchema = yup.object().shape({
    username: yup
    .string()
    .required('username is Required'),

    password: yup
    .string()
    .required('Password is required'),

    email: yup
    .string()
    .required('Email is required'),

    number: yup
    .string()
    .min(10, 'Must be 10 numbers long')
})

export default registerFormSchema