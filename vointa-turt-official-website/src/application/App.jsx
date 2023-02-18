import "./App.scss";
import React from "react";
import {
  CssBaseline,
  StyledEngineProvider,
} from "@mui/material";
import PlayersPage from "../pages/Players/PlayersPage";
import { Layout } from "./layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsPage from "../pages/News/NewsPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import LandingPage from "../pages/Landing/LandingPage";
import { GoToTop } from "../reusable/GoToTop/GoToTop";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

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
