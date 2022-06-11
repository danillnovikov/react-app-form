import React from 'react';
import { Button } from 'antd';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img src={logo} alt="logo" />

      <Button
        type="primary"
        className="btn-1"
        onClick={() => navigate('/login')}
        htmlType="submit"
      >
        Вход
      </Button>
      <Button
        type="primary"
        className="btn-1 btn-2"
        onClick={() => navigate('/registration')}
        htmlType="submit"
      >
        Регистрация
      </Button>
    </div>
  );
};

export default Home;
