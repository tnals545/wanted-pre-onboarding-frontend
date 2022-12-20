import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";
import GlobalStyles from "styles/GlobalStyles";
import SignUp from "pages/SginUp";
import Todo from "pages/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
