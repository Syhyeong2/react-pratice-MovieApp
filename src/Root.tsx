import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";

function Root() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
