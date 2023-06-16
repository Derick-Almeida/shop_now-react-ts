import GlobalStyle from "./style/global";
import * as S from "./style/index";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <GlobalStyle />

      <>
        <Header />
        <NavBar />

        <S.container>
          <S.box>
            <ProductList />
            <Cart />
          </S.box>
        </S.container>
      </>
    </>
  );
}

export default App;
