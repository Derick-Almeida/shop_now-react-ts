import * as S from "./style";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <S.header>
      <S.img src={logo} alt="Shop Now" />
    </S.header>
  );
};

export default Header;
