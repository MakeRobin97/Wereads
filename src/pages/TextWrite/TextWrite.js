import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextArea from '../../components/TextArea/TextArea';
import './TextWrite.scss';

const TextWrite = () => {
  let writingInfo = '스레드를 시작하세요.';

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  // 프로필 사진, 닉네임 가져오기
  const dataList = sessionStorage.getItem('nickname');

  // 컨텐츠 내용 담기
  const [inputs, setInputs] = useState('');
  const onInputChange = e => {
    setInputs(e.target.value);
  };

  // 포스팅 관련
  const [postingResult, setPostingResult] = useState('');

  const posting = () => {
    let tokenInfo = window.sessionStorage.getItem('accessToken');
    fetch('http://10.58.52.96:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: tokenInfo,
      },
      body: JSON.stringify({
        content: inputs,
      }),
    })
      .then(res => res.json())
      .then(result => {
        setPostingResult(result);
      });
  };

  if (postingResult.code === 'CONTENT_TOO_SHORT') {
    writingInfo = '한 글자 이상 입력해주세요';
  }
  useEffect(() => {
    if (postingResult.code === 'writingSuccess') {
      navigate('/');
    }
  });

  return (
    <div className="textWrite">
      <section className="splash">
        <section className="picSection">
          <div className="picBox">
            <img
              className="pic"
              src={process.env.PUBLIC_URL + '/images/user.png'}
              alt="프로필사진"
            />
          </div>
        </section>
        <section className="nameAndWriting">
          <div className="nickname">{dataList}</div>
          <TextArea onChange={onInputChange} placeholder={writingInfo} />
        </section>
      </section>
      <section className="btnBox">
        <Button
          text="취소"
          shape="outline"
          scale="small"
          onClick={navigateBack}
        />
        <Button text="확인" shape="solid" scale="small" onClick={posting} />
      </section>
    </div>
  );
};
export default TextWrite;
