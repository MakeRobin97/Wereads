import React, { useState } from 'react';
import './Button.scss';

function Button(props) {
  const { type = 'button', shape, icon, scale, text, action, disabled } = props;
  const [toggle, setToggle] = useState('false');
  const [toggleText, setToggleText] = useState('안 좋아요');
  const clickedToggle = e => {
    const targetAttr = e.target.attributes.icon;
    const isIconShape = targetAttr ? true : false;

    if (isIconShape) {
      setToggle(prev => !prev);
      if (!toggle) {
        setToggleText('안 좋아요');
      } else {
        setToggleText('좋아요');
      }
    }
  };

  // props
  // - type: [String]
  // - shape: [String] solid / outline / icon / mix / text
  // - icon: [String] like
  // - scale: [String] small / large
  // - text: [String]
  // - action: [String] delete
  // - disabled: 조건이 상이하므로 페이지마다 다른 삼항 조건문 적용

  return (
    <button
      className="btn"
      type={type}
      shape={shape}
      icon={icon}
      scale={scale}
      aria-label={!icon ? text : toggleText}
      action={action}
      toggle={!toggle ? 'true' : 'false'}
      onClick={clickedToggle}
      disabled={disabled}
    >
      {!icon ? text : toggleText}
    </button>
  );
}

export default Button;
