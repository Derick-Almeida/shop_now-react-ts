import GlobalStyle from "./style/global";
import * as S from "./style/index";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SectionInfo from "./components/SectionInfo";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <GlobalStyle />

      <>
        <Header />
        <S.container>
          <NavBar />
          <SectionInfo />

          <ProductList />
        </S.container>
      </>
    </>
  );
}

export default App;
