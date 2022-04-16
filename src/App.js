import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import DisplayDetails from "./pages/DisplayDetails";


function App() {
  const { id } = useParams()
  console.log(id)
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/displayDetails/:id" element={<DisplayDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
