import React from 'react';
import './Input.scss';

const Input = props => {
  let explain;
  let alert;
  let required;
  if (props.status === 'error') {
    explain = '에러 코드';
    alert = true;
  } else if (props.status === 'done') {
    explain = '완료 되었습니다.';
    alert = true;
  }

  if (props.required === true) {
    required = '필수 사항';
  } else {
    required = '선택 사항';
  }

  return (
    <div className={`input ${props.status}`}>
      {props.box ? (
        <div className="infoBox">
          <div className="infoFirst">{props.title}</div>
          <div className="infoSecond">{required}</div>
        </div>
      ) : null}
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
