import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:5000/api'
})

api.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) 
      req.headers.Authorization = `Bearer ${token}`;
    return req;
  });
  

export const login = (formData) => api.post('/user/login', formData);
export const register_ = (formData) => api.post('/user/register', formData);
export const sendMoney = (data) => api.post('/transaction/send', data);
export const getTransactions = (userId) => api.get(`/transaction/history/${userId}`);
export const getBalance = (userId) => api.get(`/user/${userId}/balance`);