import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ComingSoon from "./pages/ComingSoon";
import NowPlaying from "./pages/NowPlaying";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
        children: [
          {
            path: "movies/:movieId",
            element: <ComingSoon />,
          },
        ],
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        children: [
          {
            path: "movies/:movieId",
            element: <ComingSoon />,
          },
        ],
      },
      {
        path: "movies/:movieId",
        element: <Main />,
      },
    ],
  },
]);

export default router;
