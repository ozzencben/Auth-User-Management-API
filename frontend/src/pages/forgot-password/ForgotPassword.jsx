import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import CustomButton from '../../components/button/CustomButton';
import CustomInput from '../../components/input/CustomInput';
import { forgotPassword } from '../../services/services';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    try {
      const response = await forgotPassword(email);

      // Backend test için token döndürüyor
      const { resetToken, message, error } = response;

      if (error) {
        toast.error(error);
        return;
      }

      toast.success(message || 'Reset link sent to email');

      // Token varsa direkt reset sayfasına yönlendir
      if (resetToken) {
        navigate(`/reset-password/${resetToken}`);
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="forgot-container">
      <div className="form">
        <CustomInput
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomButton title="Send" onClick={handleForgotPassword} />
      </div>
    </div>
  );
};

export default ForgotPassword;
