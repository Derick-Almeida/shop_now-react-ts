import { useContext, useState } from "react";
import Button from "../Button";
import * as S from "./style";

import { RiSearchLine } from "react-icons/ri";
import { ProductsContex } from "../../contexts/products.context";
import DropBox from "../DropBox";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const { filterProducts, showPreview } = useContext(ProductsContex);

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    filterProducts(search);
    setSearch("");
  };

  const handler = (text: string) => {
    setSearch(text);
    showPreview(text);
  };

  return (
    <S.container onSubmit={(e) => send(e)}>
      <S.div>
        <S.input
          placeholder="Pesquisar por"
          value={search}
          onChange={(e) => handler(e.currentTarget.value)}
        />
        {search.length > 0 && <DropBox setSearch={setSearch} />}
      </S.div>

      <Button variant="active" type="submit">
        <RiSearchLine />
      </Button>
    </S.container>
  );
};

export default Search;
