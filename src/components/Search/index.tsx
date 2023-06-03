import Button from "../Button";
import * as S from "./style";

import { RiSearchLine } from "react-icons/ri";

const Search = () => {
  return (
    <S.container>
      <S.input placeholder="Pesquisar por" />

      <Button variant="active">
        <RiSearchLine />
      </Button>
    </S.container>
  );
};

export default Search;
