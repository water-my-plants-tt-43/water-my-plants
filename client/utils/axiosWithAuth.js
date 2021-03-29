import axios from "axios";

//axiosWithAuth takes in the base URL to keep the code more reuseable
export const axiosWithAuth = (url) => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: url,
        headers: {
            authorization: token
        }
    })
}