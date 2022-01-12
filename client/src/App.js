import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Playground from "./pages/Playground";

import Navbar from "./components/Navbar";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
        </>
      } />
      <Route path="/chat" element={<Chat />} />
      <Route path="/Playground" element={<Playground />} />
    </Routes>
  </>

);

export default App;
