import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './static/style/style.css'
import './static/style/mobile.css'

import Menu from "./components/Menu";
import Landing from "./components/Landing";
import Oferta from "./components/Oferta";
import Kontakt from "./components/Kontakt";
import Odszkodowania from "./pages/Odszkodowania";
import PrawoKarne from "./pages/PrawoKarne";
import PrawoRodzinne from "./pages/PrawoRodzinne";
import Windykacja from "./pages/Windykacja";
import Teleporady from "./pages/Teleporady";
import Footer from "./components/Footer";
import ONas from "./components/ONas";
import Opinie from "./components/Opinie";

function App() {
    useEffect(() => {
        const topMenu = document.querySelector(".topMenu");
        window.addEventListener("scroll", () => {
            if(window.pageYOffset> 200) {
                topMenu.classList.add("topMenu100");
                console.log(100);
            }
            else {
                console.log(0);
                topMenu.classList.remove("topMenu100");
            }
        });
    }, []);

  return (
      <div className="container">
          <Router>
              <Switch>
                  {/* Front page */}
                  <Route exact path="/">
                      <Menu backToFront={false} />
                      <Landing />
                      <Oferta />
                      <ONas />
                      <Opinie />
                      <Kontakt />
                      <Footer />
                  </Route>

                  {/* Oferta - particular sections */}
                  <Route path="/odszkodowania">
                      <Odszkodowania />
                  </Route>
                  <Route path="/prawo-karne">
                      <PrawoKarne />
                  </Route>
                  <Route path="/prawo-rodzinne">
                      <PrawoRodzinne />
                  </Route>
                  <Route path="/windykacja">
                      <Windykacja />
                  </Route>
                  <Route path="/teleporady">
                      <Teleporady />
                  </Route>

              </Switch>
          </Router>
      </div>

  );
}

export default App;
