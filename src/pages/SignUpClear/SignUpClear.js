import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './SignUpClear.scss';

const SignUpClear = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  const navigateLogIn = () => {
    navigate('/login ');
  };

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="signUpClear">
      <section className="container">
        <Button
          shape="mix"
          text="뒤로"
          clickedToggle={navigateBack}
          onFunction={navigateBack}
          onClass="backBtn"
        />
      </section>
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
            onClass="checkBtn"
            onFunction={navigateLogIn}
          ></Button>
        </div>
      </section>
    </div>
  );
};
export default SignUpClear;
