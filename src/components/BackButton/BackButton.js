import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../../svg/Back_arrow.svg';
import './BackButton.scss';

function BackButton(props) {
  const { type = 'button' } = props;
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <button
      className="back-btn"
      type={type}
      aria-label="뒤로 가기"
      onClick={goToBack}
    >
      <BackIcon />
      뒤로
    </button>
  );
}

export default BackButton;
