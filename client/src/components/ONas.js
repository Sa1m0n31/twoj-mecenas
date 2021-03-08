import React, { useEffect, useRef } from 'react'

import { gsap, ScrollTrigger } from 'gsap/all'

const ONas = () => {
    let op1 = useRef(null);
    let op2 = useRef(null);
    let op3 = useRef(null);
    let opHeader = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set([op1.current, op2.current, op3.current, opHeader.current], { opacity: 0 });

        gsap.to(opHeader.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#oNas",
                start: "top 70%"
            } });
        gsap.to(op1.current, { opacity: 1, duration: .5, scrollTrigger: {
            trigger: "#op1",
                start: "top 80%"
            } });
        gsap.to(op2.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#op2",
                start: "top 80%"
            } });
        gsap.to(op3.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#op3",
                start: "top 80%"
            } });
    }, []);

    return <section className="oNas">
        <span id="oNas"></span>
        <div className="oNasInner">
           <h2 className="oNas__header" ref={opHeader}>
               O nas
           </h2>

           <div className="oNasInner__item" ref={op1}>
               <span id="op1"></span>
               <div className="oNas__section">
                   <h3 className="oNas__section__header">
                       Kim jesteśmy?
                   </h3>
                   <p className="oNas__section__text">
                       Młodym zespołem, który na podstawie doświadczeń własnych oraz historii naszych znajomych, postanowił wyjść naprzeciw osobom, które potrzebują pomocy w znalezieniu skutecznego prawnika lub wsparcia w uzyskaniu odszkodowania.
                   </p>
               </div>
           </div>
            <div className="oNasInner__item" ref={op2}>
                <span id="op2"></span>
                <div className="oNas__section">
                    <h3 className="oNas__section__header">
                        Jak działamy?
                    </h3>
                    <p className="oNas__section__text">
                        Biorąc pod uwagę fakt, że wszyscy pędzimy niczym gazele we współczesnym świecie, szanujemy Twój czas i proponujemy kontakt zdalny. Twój Mecenas działa telefonicznie, e-mailowo oraz za pośrednictwem komunikatorów internetowych.
                    </p>
                </div>
            </div>

            <div className="oNasInner__item" ref={op3}>
                <span id="op3"></span>
                <div className="oNas__section">
                    <h3 className="oNas__section__header">
                        Dlaczego warto nam zaufać?
                    </h3>
                    <p className="oNas__section__text">
                        Ponieważ sami doskonale wiemy, że w większości proponowane odszkodowania sązaniżone, a w niektórych sytuacjach pomoc prawnika jest nieoceniona. Zdajemy sobie sprawę, że „czas to pieniądz” dlatego staramy się, aby kontakt z naszej strony był „szybki jak błyskawica”, zaś nasze działania były prowadzone „ z lwim pazurem”.
                    </p>
                </div>
            </div>


        </div>
    </section>
}

export default ONas;