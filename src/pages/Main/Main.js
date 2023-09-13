import React from 'react';
import PostList from '../../components/PostList/PostList';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <section>
        <PostList />
      </section>
    </div>
  );
};
export default Main;
