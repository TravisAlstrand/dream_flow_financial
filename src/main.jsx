import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/homepage/HomePage";
import ErrorPage from "./components/errorpage/ErrorPage";
import AboutPage from "./components/aboutpage/AboutPage";
import FAQPage from "./components/faqpage/FAQPage";
import TestimonialsPage from "./components/testimonialspage/TestimonialsPage";
import ServicesPage from "./components/servicespage/Services";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);
