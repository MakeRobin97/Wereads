import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextArea from '../../components/TextArea/TextArea';
import './TextEdit.scss';

const TextEdit = () => {
  let writingInfo = '스레드를 시작하세요.';

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  // 프로필 사진, 닉네임 가져오기
  const [dataList, setDataList] = useState([]);
  const { id } = useParams();
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
    let tokenInfo = window.localStorage.getItem('accessToken');
    fetch('http://10.58.52.52:8000/posts/create', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: '토큰',
      },
      body: JSON.stringify({
        content: '수정한 게시글의 내용',
        postId: id,
      }),
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
  console.log(postingResult);
  return (
    <div className="textEdit">
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
          <div className="nickname">
            {dataList.nickname}
            {/* 곰돌이 */}
          </div>
          <TextArea
            onChange={onInputChange}
            placeholder={writingInfo}
            value={dataList.content}
          />
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
export default TextEdit;
