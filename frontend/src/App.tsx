import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./css/main.css";
import IconSizeWrapper from "components/wrappers/IconSize";





const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/"  element={<IconSizeWrapper ><Layout /></IconSizeWrapper>} >
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    );
}

export default App;
