// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include the access token in every request
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}o/token/`, {
      grant_type: 'password',
      username: username,
      password: password,
      client_id: 'client_id',
      client_secret: 'client_secret',
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const { access_token } = response.data;
    localStorage.setItem('access_token', access_token);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.response?.data?.error_description || 'Login failed' };
  }
};

export default api;
