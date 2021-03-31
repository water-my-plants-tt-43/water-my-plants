import * as yup from 'yup'

const registerFormSchema = yup.object().shape({
    username: yup
    .string()
    .required('username is Required'),

    password: yup
    .string()
    .min(6, "Must be at least 6 characters")
    .required('Password is required'),

    email: yup
    .string()
    .email()
    .required('Email is required'),

    number: yup
    .number()
    .min(10, 'Must be 10 numbers long')
    .max(10)
})

export default registerFormSchema