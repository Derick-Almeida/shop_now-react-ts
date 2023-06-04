import { useContext } from "react";
import * as S from "./style";
import { BsExclamationCircle } from "react-icons/bs";
import { ProductsContex } from "../../contexts/products.context";

const SectionInfo = () => {
  const { data, filter } = useContext(ProductsContex);

  const products = filter.length > 0 ? filter : data;

  const totalPrice = products
    .map((product) => product.price)
    .reduce((price, acc) => price + acc, 0);

  return (
    <S.container>
      <S.text>
        <BsExclamationCircle /> Valor total dos produtos da sessão selecionada
      </S.text>

      <S.total>
        {totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </S.total>
    </S.container>
  );
};

export default SectionInfo;
