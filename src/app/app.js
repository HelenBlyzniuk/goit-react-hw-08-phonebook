import axios from "axios";
const instance=axios.create({
    baseURL:"https:/connections-api.herokuapp.com/"
})

const setToken=(token)=>{
    instance.defaults.headers.common['Authorization']=token;
}
export const signUp=async(body)=>{
    const response=await instance.post('users/signup',body);
    if(response.data.token in response.data)setToken(`Bearer ${response.data.token}`)
    return response.data ;
}

export const login=async(body)=>{
    const response=await instance.post('users/login',body);
    if(response.data.token in response.data)setToken(`Bearer ${response.data.token}`)
    return response.data ;
}

export const currentUser=async()=>{
    
    const response=await instance('users/current');
    return response.data ;
}
