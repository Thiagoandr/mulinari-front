import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Ajudante from "./Pages/Ajudante";

const App: React.FC = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Ajudante/>} />
        </Routes>
      </BrowserRouter>
     
    </main>
  );
};

export default App;
