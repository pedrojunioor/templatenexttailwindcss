import axios, { AxiosInstance } from 'axios'


let api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api 
