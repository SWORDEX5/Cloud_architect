import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />}>
            <Route index element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;