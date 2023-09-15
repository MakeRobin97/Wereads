import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PostList.scss';
import { useNavigate } from 'react-router-dom';
const Post = () => {
  const [dataList, setDataList] = useState([]);
  const publicUrl = process.env.PUBLIC_URL;
  const defaultProfileImg = `${publicUrl}/images/user.png`;

  useEffect(() => {
    fetch('/data/postData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        // const result = data.getThread;
        // setDataList(result);

        // mock data
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
                  <img
                    src={
                      item.profileImage === null ||
                      item.profileImage === 'undefined'
                        ? defaultProfileImg
                        : item.profileImage
                    }
                    alt={`${item.nickname} 프로필 사진`}
                  />
                  <span className="nickname">{item.nickname}</span>
                </div>
                <div className="right-split">
                  <span className="date">{item.createAt}</span>
                </div>
              </div>
              <Link to="/postDetail">
                <p className="post-content">{item.content}</p>
              </Link>
              <div className="count-area">
                <span>댓글 0</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Post;
