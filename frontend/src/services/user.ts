import axios from "axios";
import { SignupType } from "../components/Signup";
import { SigninPayload } from "../components/Signin";
const BASE_URL: string = 'http://localhost:3001/api/';

// Services of User APIs

export const signup = (payload: SignupType)=>{
    return axios.post(`${BASE_URL}user/signup`,payload)
}

export const signin = (payload: SigninPayload)=>{
    return axios.post(`${BASE_URL}user/signin`,payload)
}