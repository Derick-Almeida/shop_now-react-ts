import * as S from "./style";
import { ICardProps } from "./types";
import CartCardControl from "../CartCardControls";

const CartCard = ({ id, image, name, tag, price, quantity, controls, ...props }: ICardProps) => {
  return (
    <S.card {...props}>
      <S.img src={image} alt={name} draggable="false" />

      <S.content>
        <S.title>{name}</S.title>
        <S.tag>{tag}</S.tag>
        <S.text>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</S.text>

        {controls && <CartCardControl id={id} quantity={quantity} />}
      </S.content>
    </S.card>
  );
};

export default CartCard;
