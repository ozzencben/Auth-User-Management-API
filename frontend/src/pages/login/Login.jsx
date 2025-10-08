import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/button/CustomButton';
import CustomInput from '../../components/input/CustomInput';
import AuthContext from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="form">
        <CustomInput
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={'email'}
        />
        <CustomInput
          placeholder="Password"
          type="password"
          name={'password'}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <CustomButton onClick={handleLogin} title="Login" />
      </div>
      <div className="change-form-link">
        <p>
          Don't have an account?{' '}
          <span onClick={() => navigate('/register')}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
