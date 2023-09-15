import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextArea from '../../components/TextArea/TextArea';
import './TextEdit.scss';

const TextEdit = () => {
  const [dataList, setDataList] = useState({});
  const [writingInfo, setWritingInfo] = useState('스레드를 시작하세요.');
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const posting = () => {
    if (dataList.content.length === 0) {
      setWritingInfo('한 글자 이상 입력해주세요');

      return;
    }

    fetch('http://10.58.52.96:8000/posts/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: window.sessionStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        content: dataList.content,
        postId: id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.code === 'CONTENT_TOO_SHORT') {
          setWritingInfo('한 글자 이상 입력해주세요');
        }

        if (result.code === 'writingSuccess') {
          navigate('/');
        }
      });
  };

  const onInputChange = e => {
    setDataList({ ...dataList, content: e.target.value });
  };

  useEffect(() => {
    fetch(`http://10.58.52.96:8000/posts/details/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: window.sessionStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setDataList(data);
      });
  }, []);

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
