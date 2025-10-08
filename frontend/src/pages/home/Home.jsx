import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import './Home.css';

const Home = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="home-container">
      <button class="cta" onClick={logout} >
        <span>Logout</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Home;
