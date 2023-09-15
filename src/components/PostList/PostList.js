import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import ToggleButton from '../ToggleButton/ToggleButton';
import './PostList.scss';

const Post = () => {
  const [change, setChange] = useState(1);

  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const publicUrl = process.env.PUBLIC_URL;
  const defaultProfileImg = `${publicUrl}/images/user.png`;

  let getPostId;

  useEffect(() => {
    if (change === 2) {
      window.location.replace('/');
    }
  }, [change]);

  useEffect(() => {
    fetch('http://10.58.52.52:8000/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        const result = data.getThread;
        setDataList(result);
        // response에서 Authorization에 대한 key, value(true)가 내려와야 함(예: accessToken: true)

        // mock data
        // setDataList(data);
      });
  }, []);

  // const isAccessToken = true;
  // const isMyData = true;

  const deleteFunction = id => {
    fetch(`http://10.58.52.52:8000/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        postId: id,
      }),
    }).then(setChange(change + 1));
  };

  const editFunction = id => {
    navigate(`/textedit/${id}`);
  };

  console.log(dataList);
  console.log(change);

  console.log(change);
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
                  <span className="date">{item.createdAt}</span>
                  {item.isMyData ? (
                    <>
                      <Button
                        shape="text"
                        text="삭제"
                        onClick={() => deleteFunction(item.postId)}
                      />
                      <Button
                        shape="text"
                        text="수정"
                        onClick={() => editFunction(item.postId)}
                      />
                    </>
                  ) : null}
                </div>
              </div>
              {/* <Link to="/postDetail"> */}
              <p className="post-content">{item.content}</p>
              {/* </Link> */}
              <div className="count-area">
                {item.isAccessToken ? (
                  <>
                    <span>좋아요 0</span>
                    <span>댓글 0</span>
                  </>
                ) : null}
              </div>
              {item.isAccessToken ? <ToggleButton /> : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Post;
