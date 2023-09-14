import React, { useState } from 'react';
import { ReactComponent as HeartIcon } from '../../svg/heart.svg';
import './ToggleButton.scss';

function ToggleButton(props) {
  const { type = 'button', icon } = props;
  const [toggle, setToggle] = useState('false');
  const [toggleText, setToggleText] = useState('안 좋아요');
  const clickedToggle = e => {
    setToggle(prev => !prev);
    if (!toggle) {
      setToggleText('안 좋아요');
    } else {
      setToggleText('좋아요');
    }
  };

  // props
  // - type: [String]
  // - icon: [String] like
  // - text: [String]

  return (
    <button
      className="toggle-btn"
      type={type}
      icon={icon}
      aria-label={toggleText}
      toggle={!toggle ? 'true' : 'false'}
      onClick={clickedToggle}
    >
      <HeartIcon />
      {toggleText}
    </button>
  );
}

export default ToggleButton;
