import api from '../api/api';

export const checkEmailAvailability = async (email) => {
  try {
    const response = await api.post('/util/check-email', { email });
    return response.data.available;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await api.post('/users/forgot-password', { email });
    return res.data.message;
  } catch (error) {
    console.error(error);
    return error.response.data.message;
  }
};

export const resetPassword = async (resetToken, newPassword) => {
  try {
    const res = await api.post('/users/reset-password', { resetToken, newPassword });
    return res.data.message;
  } catch (error) {
    console.error(error);
    return error.response.data.message;
  }
};
