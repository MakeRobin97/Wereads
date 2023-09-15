import React from 'react';
import './Input.scss';

const Input = props => {
  const {
    placeholder,
    name,
    type,
    onInputChange,
    code,
    className = '',
  } = props;
  let explain;
  let alert = false;
  let statusColor = '';
  if (code === 'emptyEmail' && name === 'email') {
    statusColor = 'red';
    alert = true;
    explain = '가입된 적 없는 이메일이에요!';
  } else if (code === 'alreadyEmail' && name === 'email') {
    statusColor = 'red';
    alert = true;
    explain = '이미 가입 된 이메일이에요!';
  } else if (code === 'passwordError' && name === 'password') {
    statusColor = 'red';
    alert = true;
    explain = '비밀번호가 틀렸어요!';
  } else if (code === 'passwordNeedSpecial' && name === 'password') {
    statusColor = 'red';
    alert = true;
    explain = '비밀번호에는 특수기호가 필요해요!';
  }

  return (
    <label className={`input ${statusColor}`}>
      <input
        className={className}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onInputChange}
        spellCheck={false}
      />
      {alert ? (
        <div className="alertBox">
          <img src="/images/error.svg" alt="mark" />
          {explain}
        </div>
      ) : null}
    </label>
  );
};
export default Input;
