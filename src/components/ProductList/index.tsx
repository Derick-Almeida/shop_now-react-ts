import { useContext, useEffect, useRef } from "react";
import * as S from "./style";
import { ProductsContex } from "../../contexts/products.context";
import Card from "../Card";

const ProductList = () => {
  const { data, filter } = useContext(ProductsContex);

  const products = filter.length > 0 ? filter : data;
  const container = useRef<HTMLUListElement>(null);

  useEffect(() => {
    container.current?.scrollTo(0, 0);
  }, [products]);

  return (
    <S.main>
      <S.ul ref={container}>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </S.ul>
    </S.main>
  );
};

export default ProductList;
