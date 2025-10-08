import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import api from '../api/api';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await api.post('/users/login', { email, password });
      setUser(res.data.user);
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData) => {
    try {
      console.log('Registering with:', formData);
      const res = await api.post('/users/register', formData);
      setUser(res.data.user);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Try again.');
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
