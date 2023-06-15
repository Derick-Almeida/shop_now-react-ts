import { useContext } from "react";
import * as S from "./style";
import { ICardProps } from "./types";
import { ProductsContex } from "../../contexts/products.context";

const CartCard = ({ id, image, name, tag, price, quantity, controls, ...props }: ICardProps) => {
  const { addToCart, removeToCart, excludeProduct } = useContext(ProductsContex);

  return (
    <S.card {...props}>
      <S.img src={image} alt={name} draggable="false" />

      <S.content>
        <S.title>{name}</S.title>
        <S.tag>{tag}</S.tag>
        <S.text>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</S.text>

        {controls && (
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
        )}
      </S.content>
    </S.card>
  );
};

export default CartCard;
