import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/global";

import { Layout } from "./components";

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/sport" element={<Layout />} />
          <Route path="/work" element={<Layout />} />
          <Route path="/family" element={<Layout />} />
          <Route path="/statistics" element={<Layout />} />
          <Route path="/compare" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
