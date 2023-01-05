import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'App';
import NotFound from 'pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
