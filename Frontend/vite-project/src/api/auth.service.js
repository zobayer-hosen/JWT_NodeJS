import api from './axios.config';

export const authService = {
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  
  // Placeholder for login if you add it later
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  test: async () => {
    const response = await api.get('/auth/test');
    return response.data;
  }
};
