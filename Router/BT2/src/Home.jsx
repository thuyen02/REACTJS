
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (isLoggedIn !== 'true') {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const logout =() => {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  return (
    <div>
      <h1>Đây là home</h1>
      <button onClick={logout}>Thoát</button>
    </div>
  );
}