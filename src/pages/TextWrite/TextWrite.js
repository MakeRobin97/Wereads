import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import TextArea from '../../components/TextArea/TextArea';
import './TextWrite.scss';

const TextWrite = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

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

  const [inputs, setInputs] = useState({
    text: '',
  });
  const onInputChange = event => {
    const { name, value } = event.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="textWrite">
      <section className="container">
        <div className="myWriteSection">
          <img className="pic" src={dataList.profileImage} alt="프로필사진" />

          <div className="nameAndWriteSection">
            <span className="nickname">{dataList.nickname}</span>
            <TextArea
              onChange={onInputChange}
              placeholder="스레드를 시작하세요."
            />
          </div>
        </div>
        <section className="btnBox">
          <Button
            text="취소"
            shape="outline"
            scale="small"
            onFunction={navigateBack}
          />
          <Button
            text="확인"
            shape="solid"
            scale="small"
            onFunction={navigateBack}
          />
        </section>
      </section>
    </div>
  );
};
export default TextWrite;
