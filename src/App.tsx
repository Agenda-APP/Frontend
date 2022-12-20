import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/global";

import { Navigation } from "./components/Navigation";

const App: FC = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/home" element={<Navigation />} />
        <Route path="/sport" element={<Navigation />} />
        <Route path="/work" element={<Navigation />} />
        <Route path="/family" element={<Navigation />} />
        <Route path="/statistics" element={<Navigation />} />
        <Route path="/compare" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
