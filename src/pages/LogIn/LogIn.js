import React from 'react';
import Button from '../../components/Button/Button';
import './LogIn.scss';

const LogIn = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="logIn">
      <section className="splash">
        <hgroup>
          <h1>
            <img src={`${publicUrl}/images/Logo.svg`} alt="로고" />
          </h1>
          <h2>
            <img
              src={`${publicUrl}/images/logo_wecode.svg`}
              alt="위코드 로고"
            />
          </h2>
        </hgroup>
      </section>
      <section className="container">
        <form className="form">
          <fieldset>
            <legend className="hidden">로그인 양식</legend>
            <Button
              type="submit"
              shape="solid"
              scale="large"
              text="로그인"
              disabled
            />
            <Button shape="outline" scale="small" text="글쓰기" />
            <Button shape="icon" icon="like" />
            <Button shape="mix" text="뒤로" />
          </fieldset>
        </form>
      </section>
    </div>
  );
};
export default LogIn;
