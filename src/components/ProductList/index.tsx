import { useContext } from "react";
import * as S from "./style";
import { ProductsContex } from "../../contexts/products.context";
import Card from "../Card";

const ProductList = () => {
  const { data, filter } = useContext(ProductsContex);

  return (
    <S.main>
      <S.ul>
        {filter.length > 0
          ? filter.map((product) => <Card key={product.id} {...product} />)
          : data.map((product) => <Card key={product.id} {...product} />)}
      </S.ul>
    </S.main>
  );
};

export default ProductList;
