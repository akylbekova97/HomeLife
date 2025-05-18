import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { ROUTES } from "../../constants/navigation";
import { Layout } from "../layouts/Layout";

// Ленивая загрузка страниц
const HomePage = lazy(() => import("../../modules/home-page"));

export const router = createBrowserRouter([
  {
    path: ROUTES.Base,
    element: <Layout />,
    children: [{ path: ROUTES.Home, element: <HomePage /> }],
  },
]);
