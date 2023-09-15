import React from 'react';
import './Button.scss';

function Button(props) {
  const {
    type = 'button',
    shape = 'solid',
    scale,
    text,
    action,
    disabled,
    onClick,
  } = props;

  // props
  // - type: [String] button(default) / submit / reset
  // - shape: [String] solid(default) / outline / text
  // - scale: [String] large(default) / small
  // - text: [String]
  // - action: [String] delete
  // - disabled: 조건이 상이하므로 페이지마다 다른 삼항 조건문 적용

  return (
    <button
      className="btn"
      type={type}
      shape={shape}
      scale={scale}
      aria-label={text}
      action={action}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
