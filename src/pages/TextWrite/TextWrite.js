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
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch('/data/postData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDataList(data);
      });
  }, []);

  // 컨텐츠 내용 담기
  const [inputs, setInputs] = useState('');
  const onInputChange = e => {
    setInputs(e.target.value);
  };

  // 포스팅 관련
  const [postingResult, setPostingResult] = useState('');

  const posting = () => {
    fetch('http://10.58.52.108:8000/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY5NDU5NTg0NX0.yLqZpDM0JuMB8vNlNHUmxRwhnTCGx-pNLjeWPPAwc-Q',
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

  if (postingResult.code === 'writingSuccess') {
    navigate('/');
  }
  return (
    <div className="textWrite">
      <section className="container">
        <div className="myWriteSection">
          <img
            className="pic"
            src={process.env.PUBLIC_URL + '/images/user.png'}
            alt="프로필사진"
          />

          <div className="nameAndWriteSection">
            <div className="nickname">
              {/* {dataList.nickname} */}
              곰돌이
            </div>
            <TextArea onChange={onInputChange} placeholder={writingInfo} />
          </div>
        </div>
        <section className="btnBox">
          <Button
            text="취소"
            shape="outline"
            scale="small"
            onClick={navigateBack}
          />
          <Button text="확인" shape="solid" scale="small" onClick={posting} />
        </section>
      </section>
    </div>
  );
};
export default TextWrite;
