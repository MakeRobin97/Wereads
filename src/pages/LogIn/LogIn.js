import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './LogIn.scss';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
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

  const publicUrl = process.env.PUBLIC_URL;

  const logInBtnCheck =
    emailCheck(inputs.email) && passwordCheck(inputs.password) ? false : true;

  // 로그인 요청
  const navigateLogIn = e => {
    e.preventDefault();
    fetch('http://10.58.52.108:8000/users/login', {
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

  if (logInResult.code === 'logInSuccess') {
    navigate('/');
  }
  console.log(logInResult);
  console.log(logInResult.code);
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
              code={logInResult.code}
            />
            <Input
              placeholder="비밀번호"
              name="password"
              type="password"
              onInputChange={onInputChange}
              code={logInResult.code}
            />
            <Button
              type="submit"
              shape="solid"
              scale="large"
              text="로그인"
              N
              disabled={logInBtnCheck}
              onClick={navigateLogIn}
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
