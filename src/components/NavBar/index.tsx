import { useState } from "react";
import Button from "../Button";
import Search from "../Search";
import * as S from "./style";

const NavBar = () => {
  const [currentTag, setCurrentTag] = useState<string>("todos");

  return (
    <S.nav>
      <S.ul>
        <S.li>
          <Button
            variant={currentTag === "todos" ? "active" : undefined}
            onClick={() => setCurrentTag("todos")}
          >
            Todos Produtos
          </Button>
        </S.li>
        <S.li>
          <Button
            variant={currentTag === "Hortifruit" ? "active" : undefined}
            onClick={() => setCurrentTag("Hortifruit")}
          >
            Hortifruit
          </Button>
        </S.li>
        <S.li>
          <Button
            variant={currentTag === "Panificadora" ? "active" : undefined}
            onClick={() => setCurrentTag("Panificadora")}
          >
            Panificadora
          </Button>
        </S.li>
        <S.li>
          <Button
            variant={currentTag === "Laticínios" ? "active" : undefined}
            onClick={() => setCurrentTag("Laticínios")}
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
