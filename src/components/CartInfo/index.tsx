import * as S from "./style";
import { useContext } from "react";

import { ProductsContex } from "../../contexts/products.context";

const CartInfo = () => {
  const { cart } = useContext(ProductsContex);

  const totalPrice = cart
    .map((product) => product.price * product.quantity)
    .reduce((price, acc) => price + acc, 0);

  const totalQuantity = cart
    .map((product) => product.quantity)
    .reduce((price, acc) => price + acc, 0);

  return (
    <S.container>
      <S.p>
        Quantidade
        <S.span>{totalQuantity}</S.span>
      </S.p>
      <S.p>
        Total
        <S.span>
          {totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </S.span>
      </S.p>
    </S.container>
  );
};

export default CartInfo;
