import { Route, Routes } from 'react-router-dom';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<h1>Home</h1>} />
      <Route path="/" element={<h1>Login</h1>} />
      <Route path="/register" element={<h1>Register</h1>} />
    </Routes>
  );
};

export default AppRoute;
