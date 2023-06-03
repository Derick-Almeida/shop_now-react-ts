import * as S from "./style";
import { BsExclamationCircle } from "react-icons/bs";

const SectionInfo = () => {
  return (
    <S.container>
      <S.text>
        <BsExclamationCircle /> Valor total dos produtos da sessão selecionada
      </S.text>

      <S.total>R$ 44.00</S.total>
    </S.container>
  );
};

export default SectionInfo;
