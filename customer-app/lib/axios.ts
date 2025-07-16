// lib/axios.ts
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Your Flask backend
  withCredentials: true,
})

export default instance
