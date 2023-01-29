import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/global";

import { Screen } from "./components";

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/home" element={<Screen />} />
          <Route path="/sport" element={<Screen />} />
          <Route path="/work" element={<Screen />} />
          <Route path="/family" element={<Screen />} />
          <Route path="/statistics" element={<Screen />} />
          <Route path="/compare" element={<Screen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
