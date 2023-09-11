import React from 'react';
import './Button.scss';

function Button({ type, shape, icon, scale, text, toggle, onClick }) {
  return (
    <button
      className="btn"
      type={type}
      shape={shape}
      icon={icon}
      scale={scale}
      aria-label={text}
      toggle={!toggle ? 'true' : 'false'}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
