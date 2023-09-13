import React from 'react';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import SignUpClear from './pages/SignUpClear/SignUpClear';
import Button from './components/Button/Button';
import TextWrite from './pages/TextWrite/TextWrite';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  const themeSwitcher = e => {
    const wrap = document.getElementById('outer-wrap');
    e.target.checked
      ? wrap.setAttribute('theme', 'darkTheme')
      : wrap.setAttribute('theme', 'lightTheme');
  };

  return (
    <div id="outer-wrap" theme="lightTheme">
      <div className="inner-wrap">
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        >
          <input
            id="theme-switcher"
            type="checkbox"
            onClick={themeSwitcher}
            style={{
              width: '34px',
              height: '34px',
            }}
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/button" element={<Button />} />
            <Route path="/signupclear" element={<SignUpClear />} />
            <Route path="/textwrite" element={<TextWrite />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;
