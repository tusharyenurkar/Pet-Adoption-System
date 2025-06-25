import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Pets from "./Components/Pets/Pets";
import AdoptForm from "./Components/AdoptForm/AdoptForm";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import Help from "./Components/Help/Help"; // ✅ NEW IMPORT
import "./App.css";

const Layout = ({ children }) => (
  <>
    <Navbar title="FurEver" />
    {children}
    <Footer title="FurEver" />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home description="Make sure you're ready to give your new pet the love, time, and care they truly deserve." />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/pets"
          element={
            <Layout>
              <Pets />
            </Layout>
          }
        />
        <Route
          path="/adopt-form"
          element={
            <Layout>
              <AdoptForm />
            </Layout>
          }
        />
        <Route
          path="/help"
          element={
            <Layout>
              <Help />
            </Layout>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
