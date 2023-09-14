import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import './LogIn.scss';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../svg/Logo.svg';
import { ReactComponent as LogoWecode } from '../../svg/logo_wecode.svg';
import Header from '../../components/Header/Header';

const LogIn = () => {
  const [logInResult, setLogInResult] = useState({
    code: 'normal',
  });
  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate('/signup ');
  };

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const emailCheck = username => {
    return emailRegEx.test(username); //형식에 맞을 경우, true 리턴
  };

  const passwordCheck = password => {
    if (password.length >= 10) {
      return true;
    } else return false;
  };

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const onInputChange = event => {
    const { name, value } = event.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const logInBtnCheck =
    emailCheck(inputs.email) && passwordCheck(inputs.password) ? false : true;

  // 로그인 요청
  const navigateLogIn = event => {
    event.preventDefault();
    fetch('http://10.58.52.52:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        setLogInResult(result);
      });
  };

  useEffect(() => {
    if (logInResult.code === 'logInSuccess') {
      window.localStorage.setItem('accessToken', logInResult.accessToken);
      navigate('/');
    }
  });

  console.log(inputs);
  return (
    <div className="logIn">
      <section className="splash">
        <hgroup>
          <h1>
            <Logo />
          </h1>
          <h2>
            <LogoWecode />
          </h2>
        </hgroup>
      </section>
      <section className="container">
        <form
          className="form"
          onChange={onInputChange}
          onSubmit={navigateLogIn}
        >
          <fieldset>
            <legend className="hidden">로그인 양식</legend>
            <Input
              placeholder="이메일"
              name="email"
              type="text"
              // onInputChange={onInputChange}
              code={logInResult.code}
              className="emailInput"
            />
            <Input
              placeholder="비밀번호"
              name="password"
              type="password"
              // onInputChange={onInputChange}
              code={logInResult.code}
              className="passwordInput"
            />
            <Button
              type="submit"
              shape="solid"
              scale="large"
              text="로그인"
              disabled={logInBtnCheck}
            />
          </fieldset>
        </form>

        <div className="more">
          <button onClick={navigateSignUp} className="goToSignUp">
            회원 가입
          </button>
          <div className="line"></div>
          <button className="findPassword">비밀번호 찾기</button>
        </div>
      </section>
    </div>
  );
};
export default LogIn;
