import axios from "axios";
const instatce=axios.create({
    baseURL:"https:/connections-api.herokuapp.com/"
})

export const signUp=async(body)=>{
    const response=await instatce.post('/users/signup',body);
    return response.data ;
}

export const login=async(body)=>{
    const response=await instatce.post('/users/login',body);
    return response.data ;
}