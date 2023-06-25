import axios from 'axios';
const instance = axios.create({
  baseURL: 'https:/connections-api.herokuapp.com/',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};
export const clearToken = () => {
  instance.defaults.headers.common['Authorization'] = '';
};
export const signUp = async body => {
  const response = await instance.post('users/signup', body);
  setToken(`Bearer ${response.data.token}`);
  return response.data;
};

export const login = async body => {
  const response = await instance.post('users/login', body);
  setToken(`Bearer ${response.data.token}`);
  
  return response.data;
};

export const logOut = async () => {
  const response = await instance.post('users/logout');
  clearToken();
  return response;
};


export const currentUser = async () => {
  const response = await instance.get('users/current');
  return response.data;
};


export const fetchContacts=async()=>{
  const response=await instance.get('/contacts');
  return response.data;
}

export const addContact=async(body)=>{
  const response=await instance.post('/contacts',body)
  return response;
}