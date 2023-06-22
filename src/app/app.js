import axios from "axios";
const instatce=axios.create({
    baseURL:"https:/connections-api.herokuapp.com/"
})

export const signUp=async(body)=>{
    const response=await instatce.post('/users/signup',body);
    return response.token;
}