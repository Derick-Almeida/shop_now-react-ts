import { useContext } from "react";
import * as S from "./style";
import { ProductsContex } from "../../contexts/products.context";
import { IDropBoxProps } from "./types";

const DropBox = ({ setSearch }: IDropBoxProps) => {
  const { preview, selectProduct } = useContext(ProductsContex);

  const handler = (id: number) => {
    selectProduct(id);
    setSearch("");
  };

  return (
    <S.container>
      <S.ul>
        {preview.map((product) => (
          <S.card key={product.id} onClick={() => handler(product.id)}>
            <S.img src={product.image} alt={product.name} />

            <S.content>
              <S.title>{product.name}</S.title>
              <S.tag>{product.tag}</S.tag>
              <S.text>
                {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </S.text>
            </S.content>
          </S.card>
        ))}
      </S.ul>
    </S.container>
  );
};

export default DropBox;
