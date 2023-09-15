import React from 'react';
import './TextArea.scss';

const TextArea = props => {
  const { placeholder, onChange, name = 'text', value } = props;

  return (
    <div className="textArea">
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        spellCheck={false}
      />
    </div>
  );
};
export default TextArea;
