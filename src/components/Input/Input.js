import React from 'react';
import './Input.scss';

const Input = props => {
  let explain;
  let alert;
  if (props.status === 'error') {
    explain = '에러 코드';
    alert = true;
  } else if (props.status === 'done') {
    explain = '완료 되었습니다.';
    alert = true;
  }

  return (
    <div className={`input ${props.status}`}>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onInputChange}
        disabled={props.disabled}
      />
      {alert ? (
        <div className="alertBox">
          <img src={`/images/${props.status}.svg`} />
          {explain}
        </div>
      ) : null}
    </div>
  );
};
export default Input;
