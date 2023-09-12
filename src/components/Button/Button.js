import React from 'react';
import './Button.scss';

function Button(props) {
  const {
    type = 'button',
    shape,
    icon,
    scale,
    text,
    disabled,
    onFunction,
    onClass,
  } = props;

  // props
  // - type: [String]
  // - shape: [String] solid / outline / icon / mix
  // - icon: [String] like
  // - scale: [String] small / large
  // - text: [String]
  // - disabled: 조건이 상이하므로 페이지마다 다른 삼항 조건문 적용

  return (
    <button
      className={`btn ${onClass}`}
      type={type}
      shape={shape}
      icon={icon}
      scale={scale}
      onClick={onFunction}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
