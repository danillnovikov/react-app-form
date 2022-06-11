import { Form, Input, Button } from 'antd';
import logo from '../assets/img/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);
    axios
      .post('https://typ-back-end.herokuapp.com/api/login', {
        login: values.email,
        password: values.password,
      })
      .then((response) => {
        if (response.data.token == null) {
          alert('Пользователя не существует!!!');
        } else {
          // 'Ваш токен:', response.data.token;
          localStorage.setItem('token', response.data.token);
          navigate('/success');
        }
      });
  };

  return (
    <>
      <img src={logo} alt="logo" />
      <h2>Вход</h2>
      <Form onFinish={onFinish}>
        <label className="lable" htmlFor="username">
          Логин
        </label>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input id="email" placeholder="email" autoComplete="off"></Input>
        </Form.Item>
        <label className="lable" htmlFor="password">
          Пароль
        </label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password id="password" placeholder="password"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button className="btn" type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
