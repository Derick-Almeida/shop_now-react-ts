import { useContext, useState } from "react";
import Button from "../Button";
import * as S from "./style";

import { RiSearchLine } from "react-icons/ri";
import { ProductsContex } from "../../contexts/products.context";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const { filterProducts } = useContext(ProductsContex);

  return (
    <S.container>
      <S.input placeholder="Pesquisar por" onChange={(e) => setSearch(e.currentTarget.value)} />

      <Button variant="active" onClick={() => filterProducts(search)}>
        <RiSearchLine />
      </Button>
    </S.container>
  );
};

export default Search;
