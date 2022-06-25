import React from "react";
import { Route, Routes } from "react-router-dom";

import Page1 from "./pages/Page1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
    </Routes>
  );
}

export default App;
