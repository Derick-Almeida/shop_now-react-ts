import { useContext } from "react";
import * as S from "./style";
import { ProductsContex } from "../../contexts/products.context";

const ShoppingList = () => {
  const { list } = useContext(ProductsContex);

  const totalPrice = list
    .map((product) => product.price * product.quantity)
    .reduce((price, acc) => price + acc, 0);

  return (
    <S.aside>
      <S.title>Lista de Compras</S.title>

      <S.container>
        <S.ul>
          {list.map((product) => (
            <S.li key={product.id}>
              {product.name} <S.span>{`${product.quantity}X`}</S.span>
            </S.li>
          ))}

          <S.li>
            Total:
            <S.span>
              {totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </S.span>
          </S.li>
        </S.ul>
      </S.container>
    </S.aside>
  );
};

export default ShoppingList;
