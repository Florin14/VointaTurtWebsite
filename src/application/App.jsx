import "./App.scss";
import React from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import PlayersPage from "../pages/Players/PlayersPage";
import { Layout } from "./layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsPage from "../pages/News/NewsPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import LandingPage from "../pages/Landing/LandingPage";
import { GoToTop } from "../reusable/GoToTop/GoToTop";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import CurrentSeasonPage from "../pages/Seasons/2023-2024/CurrentSeasonPage";
import HistoryPage from "../pages/History/HistoryPage";
import Season2021_2022Page from "../pages/Seasons/2021-2022/2021-2022-SeasonPage";
import Season2022_2023Page from "../pages/Seasons/2022-2023/2022-2023-SeasonPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/players",
        element: <PlayersPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/contact",
        element: <GalleryPage />,
      },
      {
        path: "/season/2021-2022",
        element: <Season2021_2022Page />,
      },
      {
        path: "/season/2022-2023",
        element: <Season2022_2023Page />,
      },
      {
        path: "/season/2023-2024",
        element: <CurrentSeasonPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <GoToTop />
        <RouterProvider router={router} />
        <CssBaseline />
      </StyledEngineProvider>
    </React.Fragment>
  );
};
export default App;
