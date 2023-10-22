import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/homepage/HomePage";
import ErrorPage from "./components/errorpage/ErrorPage";
import AboutPage from "./components/aboutpage/AboutPage";
import TestimonialsPage from "./components/testimonialspage/TestimonialsPage";
import ServicesPage from "./components/servicespage/Services";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/testimonials",
//     element: <TestimonialsPage />,
//   },
//   {
//     path: "/services",
//     element: <ServicesPage />,
//   },
//   {
//     path: "*",
//     element: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
);
