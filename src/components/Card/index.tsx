import * as S from "./style";

import { FaCartPlus } from "react-icons/fa";

export const Card = () => {
  return (
    <S.container>
      <S.img src="/src/assets/maca.svg" alt="maça" />
      <S.title>Maça</S.title>
      <S.tag>Hortfrut</S.tag>
      <S.price>R$ 4.00</S.price>

      <S.button>
        <FaCartPlus />
      </S.button>
    </S.container>
  );
};

export default Card;
