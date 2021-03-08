import React, { useEffect, useRef } from 'react'

import { gsap, ScrollTrigger } from 'gsap/all';

import odszkodowania from '../static/img/odszkodowania.svg'
import prawoKarne from '../static/img/prawo-karne.svg'
import prawoRodzinne from '../static/img/prawo-rodzinne.svg'
import teleporady from '../static/img/teleporady.svg'
import windykacja from '../static/img/windykacja.svg'
import OfertaItem from "./OfertaItem";

const Oferta = () => {
    let o1 = useRef(null);
    let o2 = useRef(null);
    let o3 = useRef(null);
    let o4 = useRef(null);
    let o5 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // gsap.set([o1.current, o2.current, o3.current, o4.current, o5.current], { opacity: 0 });

        gsap.to([o1.current, o2.current, o3.current], { opacity: 1, duration: .4, scrollTrigger: {
            trigger: ".oferta__item:first-of-type",
            start: "-100px 30%"
        } });


    }, []);

    return <div className="oferta">
        <span id="oferta"></span>
        <h2 className="ofertaMobile__header">
            Nasza oferta
        </h2>

        <OfertaItem image={odszkodowania} title="Odszkodowania" myRef={o1} id="s1"
                    text="Jeśli ubiegasz się o odszkodowanie, możesz liczyć na naszą pomoc poprzez bezpłatną analizę swojej sprawy. Dzięki naszej pomocy możesz odzyskać należne Ci pieniądze."
                    link="/odszkodowania" />
        <OfertaItem image={prawoKarne} title="Prawo karne" myRef={o2} id="s2"
                    text="Zostałeś zatrzymany, jesteś o coś podejrzany? Przeciwko Tobie został skierowany akt oskarżenia? To jeszcze nie koniec świata. Jesteśmy w stanie Ci pomóc!"
                    link="/prawo-karne" />
        <OfertaItem image={prawoRodzinne} title="Prawo rodzinne" myRef={o3} id="s3"
                    text="Rozwód? Alimenty? Skontaktuj się z nami, aby poznać możliwe drogi działania w przypadku problemów i niejasności z zakresu prawa rodzinnego."
                    link="/prawo-rodzinne" />
        <OfertaItem image={windykacja} title="Windykacja" myRef={o4} id="s4"
                    text="Twój dłużnik schował głowę w piach niczym struś? Niezależnie od tego czy jesteś przedsiębiorcą, czy osobą fizyczną pomożemy Ci w odzyskaniu Twoich należności."
                    link="/windykacja" />
        <OfertaItem image={teleporady} title="Teleporady" myRef={o5} id="s5"
                    text="W dobie załatwiania spraw przez telefon Twój Mecenas wychodzi naprzeciw oczekiwaniom klientów oferując pomoc prawną w formie teleporady."
                    link="/teleporady" />

    </div>
}

export default Oferta;