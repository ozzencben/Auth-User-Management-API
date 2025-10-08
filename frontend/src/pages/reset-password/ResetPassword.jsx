import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import CustomButton from '../../components/button/CustomButton';
import CustomInput from '../../components/input/CustomInput';
import { resetPassword } from '../../services/services';
import './ResetPassword.css';

const ResetPassword = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = async (e) => {
    e.preventDefault();

    if (!formData.newPassword || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await resetPassword(resetToken, formData.newPassword);
      const message = response?.message || 'Password reset successful';
      toast.success(message);
      navigate('/login'); // Reset sonrası login sayfasına yönlendir
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Reset failed');
    }
  };

  return (
    <div className="reset-container">
        <form className='form' onSubmit={handleReset}>
          <CustomInput
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
          <CustomInput
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <CustomButton type="submit" title="Reset Password" />
        </form>
    </div>
  );
};

export default ResetPassword;
