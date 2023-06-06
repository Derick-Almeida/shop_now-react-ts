import { useContext } from "react";
import { IProductProps } from "../../contexts/types";
import * as S from "./style";

import { FaCartPlus } from "react-icons/fa";
import { ProductsContex } from "../../contexts/products.context";

export const Card = ({ id, image, name, price, tag }: IProductProps) => {
  const { addToList } = useContext(ProductsContex);

  return (
    <S.container>
      <S.img src={image} alt={name} />

      <S.content>
        <S.title>{name}</S.title>
        <S.tag>{tag}</S.tag>
        <S.price>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</S.price>
      </S.content>

      <S.button onClick={() => addToList(id)}>
        <FaCartPlus />
      </S.button>
    </S.container>
  );
};

export default Card;
