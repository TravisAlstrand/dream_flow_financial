import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/homepage/HomePage";
import ErrorPage from "./components/errorpage/ErrorPage";
import AboutPage from "./components/aboutpage/AboutPage";
import TestimonialsPage from "./components/testimonialspage/TestimonialsPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/testimonials",
    element: <TestimonialsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
