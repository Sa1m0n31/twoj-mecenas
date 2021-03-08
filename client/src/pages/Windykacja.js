import React, { useEffect, useRef } from 'react'
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import { gsap, ScrollTrigger } from 'gsap/all'

const Windykacja = () => {
    let o20 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(o20.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o20",
                start: "top 70%"
            }});
    }, []);

    return <>
        <Menu backToFront={true} />
        <section className="oferta__section">
            <h3 className="oferta__header">
                Windykacja
            </h3>
            <section className="oferta__subsection" ref={o20} id="o20">
                <p className="oferta__subsection__text">
                    Twój dłużnik schował głowę w piach niczym struś? Niezależnie od tego czy jesteś
                    przedsiębiorcą, czy osobą fizyczną pomożemy Ci w odzyskaniu Twoich należności.
                    Skierujemy do nielojalnego dłużnika wezwanie do zapłaty, złożymy pozew do sądu
                    o wydanie nakazu zapłaty, a następnie zainicjujemy postępowanie egzekucyjne.
                </p>
            </section>
        </section>
        <Footer />
    </>
}

export default Windykacja;