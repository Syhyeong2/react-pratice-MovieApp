import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";

function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default Root;
