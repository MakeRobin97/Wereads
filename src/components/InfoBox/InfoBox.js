import React from 'react';
import './InfoBox.scss';

const InfoBox = props => {
  const { title, required } = props;

  let inputInfo;
  let infoColor;
  if (required === true) {
    inputInfo = '필수 사항';
    infoColor = 'red';
  } else if (required === false) {
    inputInfo = '선택 사항';
    infoColor = 'grey';
  }

  return (
    <div className="infoBox">
      <h2 className="infoFirst">{title}</h2>
      <span className={`infoSecond ${infoColor}`}>{inputInfo}</span>
    </div>
  );
};
export default InfoBox;
