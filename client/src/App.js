import React from 'react'

import './static/style/style.css'
import './static/style/mobile.css'

import Menu from "./components/Menu";
import Landing from "./components/Landing";
import Oferta from "./components/Oferta";

function App() {
  return (
      <div className="container">
        <Menu />
        <Landing />
        <Oferta />
      </div>

  );
}

export default App;
