import styled from "styled-components";
import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import Footer from "./componets/Footer/Footer";
import Button from "./componets/Button/Button";

function App() {
  return (
    <>
      <Header />
      <Button text="Push" type="button" />
      <Main />
      <Button text="click me" />
      <Footer />
    </>
  );
}

export default App;
