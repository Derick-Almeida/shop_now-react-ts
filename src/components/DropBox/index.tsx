import * as S from "./style";
import { useContext } from "react";
import CartCard from "../CartCard";

import { ProductsContex } from "../../contexts/products.context";
import { IDropBoxProps } from "./types";

const DropBox = ({ setSearch }: IDropBoxProps) => {
  const { preview, selectProduct } = useContext(ProductsContex);

  const handler = (id: string) => {
    selectProduct(id);
    setSearch("");
  };

  return (
    <S.container>
      <S.ul>
        {preview.length > 0 ? (
          preview.map((product) => (
            <CartCard
              key={product.id}
              onClick={() => handler(product.id)}
              quantity={1}
              {...product}
            />
          ))
        ) : (
          <S.message>Nenhum produto foi encontrado!</S.message>
        )}
      </S.ul>
    </S.container>
  );
};

export default DropBox;
