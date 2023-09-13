import React from 'react';
import './TextArea.scss';

const TextArea = props => {
  const { placeholder, onChange, name = 'text' } = props;

  return (
    <div className="textArea">
      <textarea name={name} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
export default TextArea;
