import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PostList.scss';

const Post = () => {
  const [dataList, setDataList] = useState([]);
  const [date, setDate] = useState([]);
  const publicUrl = process.env.PUBLIC_URL;
  const defaultProfileImg = `${publicUrl}/images/user.png`;

  useEffect(() => {
    fetch('http://10.58.52.108:8000/posts/read', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const result = data.getThread;
        let primaryData;
        // let arr = [];

        for (let i = 0; i < result.length; i++) {
          const rawData = result[i].createdAt;
          const stringData = rawData.toString();
          primaryData = stringData.slice(2, 10);
          // arr = arr.push(primaryData);
        }

        setDataList(result);
        setDate(primaryData);
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
                  <span className="date">{date}</span>
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
