import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './LogIn.scss';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
const LogIn = () => {
  const [logInResult, setLoginResult] = useState({
    errorCode: 'normal',
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

  const publicUrl = process.env.PUBLIC_URL;

  const logInBtnCheck =
    emailCheck(inputs.email) && passwordCheck(inputs.password) ? false : true;

  // 로그인 요청
  const navigateLogIn = () => {
    fetch('http://localhost:8000/users', {
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
        setLoginResult(result);
      });
  };

  if (logInResult.errorCode === 'logInSuccess') {
    navigate('/');
  }

  return (
    <div className="logIn">
      <section className="splash">
        <hgroup>
          <h1>
            <img src={`${publicUrl}/images/Logo.svg`} alt="wecodeLogo" />
          </h1>
          <h2>
            <img
              src={`${publicUrl}/images/logo_wecode.svg`}
              alt="wecodeWordLogo"
            />
          </h2>
        </hgroup>
      </section>
      <section className="container">
        <form className="form">
          <fieldset>
            <legend className="hidden">로그인 양식</legend>
            <Input
              placeholder="이메일"
              name="email"
              type="text"
              onInputChange={onInputChange}
              status={logInResult.errorCode}
            />
            <Input
              placeholder="비밀번호"
              name="password"
              type="password"
              onInputChange={onInputChange}
              status={logInResult.errorCode}
            />
            <Button
              type="button"
              shape="solid"
              scale="large"
              text="로그인"
              disabled={logInBtnCheck}
              onClcik={navigateLogIn}
            />
          </fieldset>
        </form>

        <div className="more">
          <div className="goToSignUp">
            <button onClick={navigateSignUp}>회원 가입</button>
          </div>
          <div className="findPassword">
            <button>비밀번호 찾기</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LogIn;
