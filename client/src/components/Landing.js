import React from 'react'

import landing from './../static/img/twojmecenas-hero.jpg'

import odszkodowania from '../static/img/odszkodowania.svg'
import prawoKarne from '../static/img/prawo-karne.svg'
import prawoRodzinne from '../static/img/prawo-rodzinne.svg'
import teleporady from '../static/img/teleporady.svg'
import windykacja from '../static/img/windykacja.svg'

const Landing = () => {
    return <div className="landing">
        <img className="landing__img" src={landing} alt="twoj-mecenas-oferta" />
        <div className="landing__header">
            <h3 className="landing__header__header">
                Nasza oferta
            </h3>

            <div className="landing__header__oferta">
                <div className="landing__oferta__item">
                    <div className="landing__oferta__item__imgWrapper">
                        <img className="landing__oferta__item__img" src={odszkodowania} alt="odszkodowania" />
                    </div>
                    <h4 className="landing__oferta__item__header">
                        Odszkodowania
                    </h4>
                </div>

                <div className="landing__oferta__item">
                    <div className="landing__oferta__item__imgWrapper">
                        <img className="landing__oferta__item__img" src={prawoKarne} alt="prawo-karne" />
                    </div>
                    <h4 className="landing__oferta__item__header">
                        Prawo karne
                    </h4>
                </div>

                <div className="landing__oferta__item">
                    <div className="landing__oferta__item__imgWrapper">
                        <img className="landing__oferta__item__img" src={prawoRodzinne} alt="prawo-rodzinne" />
                    </div>
                    <h4 className="landing__oferta__item__header">
                        Prawo rodzinne
                    </h4>
                </div>

                <div className="landing__oferta__item">
                    <div className="landing__oferta__item__imgWrapper">
                        <img className="landing__oferta__item__img" src={windykacja} alt="windykacja" />
                    </div>
                    <h4 className="landing__oferta__item__header">
                        Windykacja
                    </h4>
                </div>

                <div className="landing__oferta__item">
                    <div className="landing__oferta__item__imgWrapper">
                        <img className="landing__oferta__item__img" src={teleporady} alt="teleporady" />
                    </div>
                    <h4 className="landing__oferta__item__header">
                        Teleporady
                    </h4>
                </div>
            </div>
        </div>
    </div>
}

export default Landing;