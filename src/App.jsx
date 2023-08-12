import React, { useState } from "react";
import Home from "./Home.jsx";
import Create from "./Create.jsx";
import Update from "./Update.jsx";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/create" element={<Create />}>
          {" "}
        </Route>
        <Route path="/update" element={<Update />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
