import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './PostList.scss';

const Post = () => {
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

  return (
    <ul className="post-list">
      {dataList.map(item => {
        return (
          <li key={item.postId} className="post-item">
            <div>
              <div className="profile-area">
                <div className="left-split">
                  <img src={item.profileImage} alt="류창선님 프로필 사진" />
                  <span className="nickname">{item.nickname}</span>
                </div>
                <div className="right-split">
                  <div className="date-area">
                    <span className="date">{item.createdAt}</span>
                    <Button shape="text" text="삭제" action="delete" />
                    <Button shape="text" text="수정" />
                  </div>
                </div>
              </div>
              <Link to="/postDetail">
                <p className="post-content">{item.content}</p>
              </Link>
              <div className="count-area">
                <span>좋아요 0</span>
                <span>댓글 0</span>
              </div>
              <Button shape="icon" icon="like" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Post;
