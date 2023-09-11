import React, { useState } from 'react';
import './LogIn.scss';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  // useNavigate
  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate('/signup ');
  };

  const navigateLogIn = () => {
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userId,
        password: userPassword,
        name: '박경재',
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  };

  // Logo
  const MainLogo = process.env.PUBLIC_URL + '/images/Weread/Logo.png';
  const WordLogo = process.env.PUBLIC_URL + '/images/Weread/logo_wecode.png';

  // State
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // 이메일 검증식
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const emailCheck = username => {
    return emailRegEx.test(username); //형식에 맞을 경우, true 리턴
  };

  // 비밀번호 검증식
  const passwordCheck = password => {
    if (password.length >= 10) {
      return true;
    } else return false;
  };

  // Input 값 저장
  const onInputChange = event => {
    const { name, value } = event.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login">
      <Input
        placeholder="이메일"
        name="email"
        type="text"
        onInputChange={onInputChange}
        inputs={inputs}
        disabled={false}
        required={false}
        dataCheck={false}
        status="normal"
      />
      <Input
        placeholder="비밀번호"
        name="password"
        type="password"
        onInputChange={onInputChange}
        inputs={inputs}
        disabled={false}
        required={false}
        status="normal"
      />
      <Input
        placeholder="이메일"
        name="email"
        type="text"
        onInputChange={onInputChange}
        inputs={inputs}
        disabled={true}
        required={false}
        dataCheck={false}
        status="normal"
      />
      <Input
        placeholder="비밀번호"
        type="password"
        name="password"
        onInputChange={onInputChange}
        disabled={false}
        required={false}
        dataCheck={false}
        status="error"
      />
      <Input
        placeholder="비밀번호"
        type="password"
        name="password"
        onInputChange={onInputChange}
        disabled={false}
        required={false}
        dataCheck={false}
        status="done"
      />
    </div>
  );
};
export default LogIn;
