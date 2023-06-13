import GlobalStyle from "./style/global";
import * as S from "./style/index";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <GlobalStyle />

      <>
        <Header />
        <S.container>
          <NavBar />

          <S.box>
            <ProductList />
          </S.box>
        </S.container>
      </>
    </>
  );
}

export default App;
