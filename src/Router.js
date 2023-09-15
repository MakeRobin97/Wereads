import React from 'react';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import SignUpClear from './pages/SignUpClear/SignUpClear';
import Button from './components/Button/Button';
import TextWrite from './pages/TextWrite/TextWrite';
import TextEdit from './pages/TextEdit/TextEdit';
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
        <input id="theme-switcher" type="checkbox" onClick={themeSwitcher} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/button" element={<Button />} />
            <Route path="/signupclear" element={<SignUpClear />} />
            <Route path="/textwrite" element={<TextWrite />} />
            <Route path="/textedit/:id" element={<TextEdit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;
