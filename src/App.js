import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Login from "./components/login"
import Home from "./components/home";
import LoginChecker from "./components/loginchecker";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="Samaj Darpan"></header>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to = "/login"/>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <LoginChecker>
                <Home />
              </LoginChecker>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
