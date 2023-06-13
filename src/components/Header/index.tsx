import * as S from "./style";

import logo from "/logo.png";

const Header = () => {
  return (
    <S.header>
      <S.img src={logo} alt="Shop Now" draggable="false" />
    </S.header>
  );
};

export default Header;
