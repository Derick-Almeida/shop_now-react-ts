import { useContext } from "react";
import { IProductProps } from "../../contexts/types";
import * as S from "./style";

import { ProductsContex } from "../../contexts/products.context";

export const Card = ({ id, image, name, price, tag }: IProductProps) => {
  const { addToCart } = useContext(ProductsContex);

  return (
    <S.container>
      <S.img src={image} alt={name} draggable="false" />

      <S.content>
        <S.title>{name}</S.title>
        <S.tag>{tag}</S.tag>
        <S.price>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</S.price>
      </S.content>

      <S.button onClick={() => addToCart(id)}>Comprar</S.button>
    </S.container>
  );
};

export default Card;
