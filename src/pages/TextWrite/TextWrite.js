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
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: '토큰',
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
  return (
    <div className="textWrite">
      <section className="container">
        <div className="myWriteSection">
          <img
            className="pic"
            //src={dataList.profileImage}
            src="https://data.onnada.com/character/202010/thumb_2041552504_6ec9f3a9_9585EBA78829.png"
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
