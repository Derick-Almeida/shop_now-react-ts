import { useContext, useState } from "react";
import Button from "../Button";
import Search from "../Search";
import * as S from "./style";
import { ProductsContex } from "../../contexts/products.context";

const NavBar = () => {
  const [currentTag, setCurrentTag] = useState<string>("todos");

  const { filterProducts } = useContext(ProductsContex);

  const handler = (tag: string) => {
    setCurrentTag(tag);
    filterProducts(tag);
  };

  return (
    <S.nav>
      <S.ul>
        <S.li>
          <Button
            variant={currentTag === "todos" ? "active" : undefined}
            onClick={() => handler("todos")}
          >
            Todos Produtos
          </Button>
        </S.li>
        <S.li>
          <Button
            variant={currentTag === "Hortifruit" ? "active" : undefined}
            onClick={() => handler("Hortifruit")}
          >
            Hortifruit
          </Button>
        </S.li>
        <S.li>
          <Button
            variant={currentTag === "Panificadora" ? "active" : undefined}
            onClick={() => handler("Panificadora")}
          >
            Panificadora
          </Button>
        </S.li>
        <S.li>
          <Button
            variant={currentTag === "Laticínios" ? "active" : undefined}
            onClick={() => handler("Laticínios")}
          >
            Laticínios
          </Button>
        </S.li>
      </S.ul>

      <Search />
    </S.nav>
  );
};

export default NavBar;
