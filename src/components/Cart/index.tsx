import * as S from "./style";

import { FaCartArrowDown } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

const Cart = () => {
  return (
    <S.cart>
      <S.h3>
        <FaCartArrowDown /> Carrinho
      </S.h3>
      <S.container>
        <LuShoppingBag />

        <S.span>Por enquanto não temos produtos no carrinho</S.span>
      </S.container>
    </S.cart>
  );
};

export default Cart;
