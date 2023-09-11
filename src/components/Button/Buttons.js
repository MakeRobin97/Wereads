import React, { useState } from 'react';
import Button from './Button';

function Buttons() {
  const [toggle, setToggle] = useState('false');
  const [text, setText] = useState('안 좋아요');
  const clickedToggle = () => {
    setToggle(prev => !prev);
    if (!toggle) {
      setText('안 좋아요');
    } else {
      setText('좋아요');
    }
  };

  /*
    props
    - type: [String]
    - shape: [String] solid / outline / icon
    - icon: [String] like 
    - scale: [String] small / large
    - text: [String]
    - toggle: [Boolean]
    - onClick: [Function]
  */

  return (
    <>
      <Button type="button" shape="solid" scale="small" text="솔리드 버튼" />

      <Button
        type="submit"
        shape="outline"
        scale="large"
        text="아웃라인 버튼"
      />

      <Button type="button" shape="mix" text="뒤로" />

      <Button
        type="button"
        shape="icon"
        icon="like"
        text={text}
        onClick={clickedToggle}
        toggle={toggle}
      />
    </>
  );
}

export default Buttons;
