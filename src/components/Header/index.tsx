import * as S from "./style";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <S.Header>
      <S.Img src={logo} alt="Shop Now" />
    </S.Header>
  );
};

export default Header;
