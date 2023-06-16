import * as S from "./style";
import { useContext } from "react";
import { ProductsContex } from "../../contexts/products.context";

import { FaCartArrowDown } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import CartCard from "../CartCard";
import CartInfo from "../CartInfo";

const Cart = () => {
  const { cart } = useContext(ProductsContex);

  return (
    <S.cart>
      <S.h3>
        <FaCartArrowDown /> Carrinho
      </S.h3>
      {cart.length === 0 ? (
        <S.container>
          <LuShoppingBag />
          <S.span>Por enquanto não temos produtos no carrinho</S.span>
        </S.container>
      ) : (
        <>
          <S.ul>
            {cart.map((product) => (
              <CartCard key={product.id} {...product} controls />
            ))}
          </S.ul>

          <CartInfo />
        </>
      )}
    </S.cart>
  );
};

export default Cart;
