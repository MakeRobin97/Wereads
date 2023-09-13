import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import './SignUpClear.scss';

const SignUpClear = () => {
  const navigate = useNavigate();

  const navigateLogIn = () => {
    navigate('/login ');
  };

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="signUpClear">
      <Header />
      <section className="splash">
        <hgroup>
          <h1>
            <img
              src={`${publicUrl}/images/banner_square.svg`}
              alt="wecodeLogo"
            />
          </h1>
          <h2>회원 가입되었습니다!</h2>
          <h3>이제 로그인해주세요.</h3>
        </hgroup>
      </section>
      <section className="container">
        <div className="checkBtn">
          <Button
            type="button"
            shape="solid"
            scale="large"
            text="확인"
            onClick={navigateLogIn}
          />
        </div>
      </section>
    </div>
  );
};
export default SignUpClear;
