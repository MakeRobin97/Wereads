import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import InfoBox from '../../components/InfoBox/InfoBox';
import Header from '../../components/Header/Header';
import './SignUp.scss';

const SignUp = () => {
  const [signUpResult, setSignUpResult] = useState({
    code: 'normal',
  });
  const [pwAgain, setPwAgain] = useState('');

  const navigate = useNavigate();

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

  const passwordAgain = e => {
    setPwAgain(e.target.value);
  };

  const passwordAgainCheck = password => {
    if (password === inputs.password) {
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

  const signUpBtnCheck =
    emailCheck(inputs.email) &&
    passwordCheck(inputs.password) &&
    passwordAgainCheck(pwAgain)
      ? false
      : true;

  const postSignUp = () => {
    fetch('http://10.58.52.108:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
        nickname: inputs.nickname,
      }),
    })
      .then(res => res.json())
      .then(result => {
        setSignUpResult(result);
      });
  };

  if (signUpResult.code === 'signUpSuccess') {
    navigate('/signupclear');
  }
  console.log(signUpResult);
  return (
    <div className="signUp">
      <Header />
      <section className="container">
        <form className="form">
          <fieldset>
            <legend className="hidden">회원가입 양식</legend>

            <h1>회원가입</h1>
            <InfoBox title="이메일" required={true} />
            <Input
              placeholder="이메일"
              name="email"
              type="text"
              onInputChange={onInputChange}
              code={signUpResult.code}
            />
            <Input
              placeholder="비밀번호"
              name="password"
              type="password"
              onInputChange={onInputChange}
              disabled={false}
              code={signUpResult.code}
            />
            <Input
              placeholder="비밀번호 확인"
              name="passwordAgain"
              type="password"
              disabled={false}
              onInputChange={passwordAgain}
            />
            <InfoBox title="닉네임" required={false} />
            <Input
              placeholder="닉네임"
              name="nickname"
              type="text"
              onInputChange={onInputChange}
            />

            <Button
              type="button"
              shape="solid"
              scale="large"
              text="회원 가입"
              disabled={signUpBtnCheck}
              onClick={postSignUp}
            />
          </fieldset>
        </form>
      </section>
    </div>
  );
};
export default SignUp;
