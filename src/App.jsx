import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
import ChangePassword from "./components/changePassword";
import Header from "./components/header";
import ProductGrid from "./components/products";
import Footer from "./components/footer";
import SigninHeader from "./components/signinHeader";
import NotificationPanel from "./components/notifications";
import Register from "./components/register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />

        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/john-doe"
          element={
            <>
              <SigninHeader />
              <ProductGrid />
              <Footer />
            </>
          }
        />
        <Route
          path="/notifications"
          element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
              <NotificationPanel />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <ProductGrid />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
