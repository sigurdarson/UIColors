import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import ColorSection from "./components/Colors/ColorSection"
import GradientSection from "./components/Gradients/GradientSection"
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header />
    <div className="success">
      Copied
    </div>
    <div>
    <Route exact path='/' component={ ColorSection } />
    <Route exact path='/Gradients' component={ GradientSection } />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
