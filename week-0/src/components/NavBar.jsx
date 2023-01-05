import { useNavigate } from "react-router-dom";

import { Div } from "styles/Div";
import { Span } from "styles/Span";

const NavBar = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem("loginToken");
    navigate("/");
  };

  return (
    <Div purpose="navbar">
      <Span
        onClick={onClickLogout}
        size="large"
        className="cursor"
        bold="thick"
      >
        Logout
      </Span>
    </Div>
  );
};

export default NavBar;
