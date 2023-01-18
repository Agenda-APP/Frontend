import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/global";

import { MainWrapper } from "./components";

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainWrapper />} />
          <Route path="/home" element={<MainWrapper />} />
          <Route path="/sport" element={<MainWrapper />} />
          <Route path="/work" element={<MainWrapper />} />
          <Route path="/family" element={<MainWrapper />} />
          <Route path="/statistics" element={<MainWrapper />} />
          <Route path="/compare" element={<MainWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
