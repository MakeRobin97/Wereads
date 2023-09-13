import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from '../../components/PostList/PostList';
import Button from '../../components/Button/Button';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  const goToTextWrite = () => {
    navigate('/textwrite');
  };

  return (
    <div className="main">
      <section>
        <PostList />
        <div className="btn-wrap">
          <Button scale="small" text="글 쓰기" onClick={goToTextWrite} />
        </div>
      </section>
    </div>
  );
};
export default Main;
