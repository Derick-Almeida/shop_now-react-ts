import GlobalStyle from "./style/global";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SectionInfo from "./components/SectionInfo";

function App() {
  return (
    <>
      <GlobalStyle />

      <>
        <Header />
        <div style={{ padding: "6vh 10vw" }}>
          <NavBar />
          <SectionInfo />
        </div>
      </>
    </>
  );
}

export default App;
