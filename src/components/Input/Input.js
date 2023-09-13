import React from 'react';
import './Input.scss';

const Input = props => {
  const { placeholder, name, type, onInputChange, disabled, status } = props;
  let explain;
  let alert = false;
  let statusColor;
  if (status === 'emptyEmail' && name === 'email') {
    statusColor = 'red';
    alert = true;
    explain = '가입된 적 없는 이메일이에요!';
  } else if (status === 'alreadyEmail' && name === 'email') {
    statusColor = 'red';
    alert = true;
    explain = '이미 가입 된 이메일이에요!';
  } else if (status === 'passwordError' && name === 'password') {
    statusColor = 'red';
    alert = true;
    explain = '비밀번호가 틀렸어요!';
  }

  // if (status === 'idError') {
  //   explain = '존재하지 않는 이메일입니다!';
  //   alert = true;
  // } else if (status === 'idExist') {
  //   explain = '이미 가입되어 있는 아이디입니다!';
  //   alert = true;
  // } else if (status === 'passwordError') {
  //   explain = '비밀번호가 틀렸어요!';
  //   alert = true;
  // } else if (status === 'done') {
  //   explain = '완료 되었습니다.';
  //   alert = true;
  // }

  return (
    <label className={`input ${statusColor}`}>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onInputChange}
      />
      {alert ? (
        <div className="alertBox">
          <img src={`/images/error.svg`} alt="mark" />
          {explain}
        </div>
      ) : null}
    </label>
  );
};
export default Input;
