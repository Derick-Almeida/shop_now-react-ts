import GlobalStyle from "./style/global";
import * as S from "./style/index";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SectionInfo from "./components/SectionInfo";

function App() {
  return (
    <>
      <GlobalStyle />

      <>
        <Header />
        <S.contaier>
          <NavBar />
          <SectionInfo />
        </S.contaier>
      </>
    </>
  );
}

export default App;
