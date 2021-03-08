import React, { useEffect, useRef } from 'react'
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import { gsap, ScrollTrigger } from 'gsap/all'

const Teleporady = () => {
    let o21 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(o21.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o21",
                start: "top 70%"
            }});
    }, []);

    return <>
        <Menu backToFront={true} />
        <section className="oferta__section">
            <h3 className="oferta__header">
                Teleporady
            </h3>
            <section className="oferta__subsection" ref={o21} id="o21">
                <p className="oferta__subsection__text">
                    Szukasz szybkiej porady? W dobie załatwiania spraw przez telefon Twój Mecenas
                    wychodzi naprzeciw oczekiwaniom klientów oferując pomoc prawną w formie
                    teleporady. Skontaktuj się z nami, opisz krótko swój problem, a my dobierzemy
                    odpowiedniego prawnika do Twojej sprawy i ustalimy wspólnie dogodny termin
                    teleporady.
                </p>
            </section>
        </section>
        <Footer />
    </>
}

export default Teleporady;