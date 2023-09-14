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
        <div className="imgBox">
          <img src={`${publicUrl}/images/banner_square.svg`} alt="wecodeLogo" />
        </div>
        <h1>회원 가입되었습니다!</h1>
        <div className="nowLogIn">이제 로그인해주세요.</div>
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
