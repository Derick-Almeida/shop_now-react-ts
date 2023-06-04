import { IProductProps } from "../../contexts/types";
import * as S from "./style";

import { FaCartPlus } from "react-icons/fa";

export const Card = ({ image, name, price, tag }: IProductProps) => {
  return (
    <S.container>
      <S.img src={image} alt={name} />

      <S.content>
        <S.title>{name}</S.title>
        <S.tag>{tag}</S.tag>
        <S.price>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</S.price>
      </S.content>

      <S.button>
        <FaCartPlus />
      </S.button>
    </S.container>
  );
};

export default Card;
