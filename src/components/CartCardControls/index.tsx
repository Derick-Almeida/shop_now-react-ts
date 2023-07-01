import { useContext } from "react";
import * as S from "./style";
import { ProductsContex } from "../../contexts/products.context";
import { ICartControlProps } from "./types";

const CartCardControl = ({ id, quantity }: ICartControlProps) => {
  const { addToCart, removeToCart, excludeProduct } = useContext(ProductsContex);

  return (
    <S.controlsContainer>
      <S.controls>
        <S.button title="remover" onClick={() => removeToCart(id)}>
          -
        </S.button>
        <S.span>{quantity}</S.span>
        <S.button title="adicionar" onClick={() => addToCart(id)}>
          +
        </S.button>
      </S.controls>
      <S.exclude onClick={() => excludeProduct(id)}>excluir</S.exclude>
    </S.controlsContainer>
  );
};

export default CartCardControl;
