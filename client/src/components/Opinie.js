import React, { useEffect, useRef } from 'react'

import { gsap, ScrollTrigger } from "gsap/all";

const Opinie = () => {
    let opinia1 = useRef(null);
    let opinia2 = useRef(null);
    let opinia3 = useRef(null);
    let opiniaH = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set([opinia1.current, opinia2.current, opinia3.current, opiniaH.current], { opacity: 0 });

        gsap.to(opiniaH.current, { opacity: 1, duration: .5, scrollTrigger: {
            trigger: ".opinie__header",
                start: "top 90%"
            } });
        gsap.to(opinia1.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#opinia1",
                start: "top 90%"
        } });
        gsap.to(opinia2.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#opinia2",
                start: "top 90%"
            } });
        gsap.to(opinia3.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#opinia3",
                start: "top 90%"
            } });

    }, []);

    return <section className="opinie">
        <span id="opinie"></span>
        <h2 className="opinie__header" ref={opiniaH}>
            Opinie
        </h2>

        <div className="opinie__item" id="opinia1" ref={opinia1}>
            <p className="opinie__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4 className="opinie__author">
                Cristiano Ronaldo
            </h4>
        </div>

        <div className="opinie__item" id="opinia2" ref={opinia2}>
            <p className="opinie__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4 className="opinie__author">
                Cristiano Ronaldo
            </h4>
        </div>

        <div className="opinie__item" id="opinia3" ref={opinia3}>
            <p className="opinie__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4 className="opinie__author">
                Cristiano Ronaldo
            </h4>
        </div>
    </section>
}

export default Opinie;