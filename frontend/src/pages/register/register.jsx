import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import CustomButton from '../../components/button/CustomButton';
import CustomInput from '../../components/input/CustomInput';
import AuthContext from '../../context/AuthContext';
import { checkEmailAvailability } from '../../services/services';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const { register } = useContext(AuthContext);
  const [hasError, setHasError] = useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [passwordAgain, setPasswordAgain] = useState('');

  const debounceTimer = useRef(null);

  const validateEmailFormat = (email) => {
    // Basit email regex kontrolü
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      // Önceki timer varsa iptal et
      if (debounceTimer.current) clearTimeout(debounceTimer.current);

      // Email formatı hatalıysa direkt hata göster, checkEmailAvailability yapma
      if (!validateEmailFormat(value)) {
        setHasError(true);
        return;
      }

      // Email formatı doğruysa, debounce ile kontrol et
      debounceTimer.current = setTimeout(() => {
        checkEmailAvailability(value).then((available) => {
          if (!available) {
            toast.error('Email already exists.');
          }
          setHasError(!available);
        });
      }, 500);
    }
  };

  const matchPasswords = () => {
    if (formData.password !== passwordAgain) {
      toast.error('Passwords do not match.');
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    return (
      formData.firstname &&
      formData.lastname &&
      formData.email &&
      formData.password &&
      passwordAgain
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!matchPasswords()) return;

    try {
      await register(formData);
      toast.success('User registered successfully.');
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="register-container">
      <div className="form">
        <div className="name-row">
          <CustomInput
            placeholder={'First Name'}
            name={'firstname'}
            onChange={handleChange}
            value={formData.firstname}
          />
          <CustomInput
            placeholder={'Last Name'}
            value={formData.lastname}
            onChange={handleChange}
            name={'lastname'}
          />
        </div>
        <CustomInput
          placeholder={'Email'}
          value={formData.email}
          onChange={handleChange}
          name={'email'}
          hasError={hasError}
        />
        <CustomInput
          placeholder={'Password'}
          name={'password'}
          onChange={handleChange}
          value={formData.password}
          type={'password'}
        />
        <CustomInput
          placeholder={'Password Again'}
          type={'password'}
          onChange={(e) => setPasswordAgain(e.target.value)}
          value={passwordAgain}
          name={'password-again'}
        />
        <CustomButton
          disabled={!isFormValid()}
          onClick={handleRegister}
          title={'Sign Up'}
        />
        <div className="forgot-password">
          <p onClick={() => navigate('/forgot-password')}>Forgot Password</p>
        </div>
      </div>
      <div className="change-form-link">
        <p>
          Already have an account?{' '}
          <span onClick={() => navigate('/')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
