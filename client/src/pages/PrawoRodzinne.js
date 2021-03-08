import React, { useEffect, useRef } from 'react'
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import { gsap, ScrollTrigger } from 'gsap/all'

const PrawoRodzinne = () => {
    let o14 = useRef(null);
    let o15 = useRef(null);
    let o16 = useRef(null);
    let o17 = useRef(null);
    let o18 = useRef(null);
    let o19 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(o14.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o14",
                start: "top 70%"
            }});
        gsap.to(o15.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o15",
                start: "top 70%"
            }});
        gsap.to(o16.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o16",
                start: "top 70%"
            }});
        gsap.to(o17.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o17",
                start: "top 70%"
            }});
        gsap.to(o18.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o18",
                start: "top 70%"
            }});
        gsap.to(o19.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o19",
                start: "top 70%"
            }});
    }, []);

    return <>
        <Menu backToFront={true} />
        <section className="oferta__section">
            <h4 className="oferta__header">
                Prawo rodzinne
            </h4>

            <section className="oferta__subsection" ref={o14} id="o14">
                <h4 className="oferta__subsection__header">
                    rozwody
                    <span className="oferta__subsection__number">
                        a)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Kiedy „...i żyli długo i szcześliwie...” przestaje być aktualne, a rozwód jest
                    nieunikniony pomożemy Ci przejść przez ten trudny i emocjonalny proces,
                    jednocześnie dbając o Twoje interesy. Zatroszczymy się o to, by Twoje
                    potrzeby zostały zabezpieczone na czas prowadzenia postępowania i żeby jak
                    najbardziej skrócić okres jego trwania.
                </p>
            </section>

            <section className="oferta__subsection" ref={o15} id="o15">
                <h4 className="oferta__subsection__header">
                    alimenty
                    <span className="oferta__subsection__number">
                        b)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Chcesz ustalić alimenty na swoje dziecko albo wydaje Ci się, że
                    dotychczasowe alimenty są już za niskie?
                    Pomożemy Ci w określeniu rzeczywistych kosztów utrzymania dziecka,
                    zgromadzeniu odpowiednich dowodów i będziemy reprezentować Twoje
                    interesy przed Sądem, dbając o ich zabezpieczenia już na etapie
                    postępowania sądowego.
                    <br/><br/>
                    Wydaje Ci się, że dotychczasowe alimenty są już za wysokie albo chcesz
                    przestać je płacić?
                    Skontaktuj się z nami, przeanalizujemy Twoją sytuację i wskażemy, którą
                    drogę powinieneś wybrać. Następnie pomożemy Ci w zgromadzeniu
                    odpowiednich dowodów i będziemy reprezentować Twoje interesy przed
                    Sądem, dbając o ich zabezpieczenia już na etapie postępowania sądowego.
                </p>
            </section>

            <section className="oferta__subsection" ref={o16} id="o16">
                <h4 className="oferta__subsection__header">
                    władza rodzicielska
                    <span className="oferta__subsection__number">
                        c)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Chcesz ograniczyć władzę rodzicielską nad dzieckiem drugiemu rodzicowi?
                    Skontaktuj się z nami, żeby poznać możliwe drogi działania, bowiem władzę
                    rodzicielską można nie tylko ograniczyć, ale również jej pozbawić bądź
                    zawiesić.
                    <br/><br/>
                    Otrzymałeś wniosek o ograniczenie władzy rodzicielskiej albo jej
                    pozbawienie?
                    To jeszcze nie wyrok, więc będziemy walczyć jak lwy o jej pozostawienie.
                    Zgromadzimy odpowiednie dowody i będziemy starali się przekonać sąd, że w
                    rzeczywistości jesteś dobrym rodzicem.
                </p>
            </section>

            <section className="oferta__subsection" ref={o17} id="o17">
                <h4 className="oferta__subsection__header">
                    miejsce pobytu dziecka
                    <span className="oferta__subsection__number">
                        d)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Z naszego doświadczenia wynika, że jest to kwestia często pomijana przy
                    rozstaniu, choć jest niezmiernie ważna dla określenia, które z rodziców jest
                    pierwszoplanowym opiekunem dziecka.
                </p>
            </section>

            <section className="oferta__subsection" ref={o18} id="o18">
                <h4 className="oferta__subsection__header">
                    kontakty
                    <span className="oferta__subsection__number">
                        e)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Z naszego doświadczenia wynika, iż często po rozstaniu rodziców dochodzi
                    do konfliktu na tle częstotliwości i sposobu spotkań rodzica
                    niemieszkającego z dziećmi. Wówczas jedynym rozwiązaniem jest ich
                    ustalenie przez sąd. Pomożemy Ci przekonać sąd do rozwiązania
                    uwzględniającego potrzeby i możliwości zarówno Twoje, jak i Twojego
                    dziecka.
                    <br/><br/>
                    Nie każdy wie, że o ustalenie kontaktów mogą również starać się dziadkowie.
                    W tym przypadku również służymy swoją pomocą opartą na bogatym
                    doświadczeniu w tego typu sprawach.
                </p>
            </section>

            <section className="oferta__subsection" ref={o19} id="o19">
                <h4 className="oferta__subsection__header">
                    ustalenie bądź zaprzeczenie ojcostwa
                    <span className="oferta__subsection__number">
                        f)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Może się wydawać, że są to sprawy z pozoru łatwe i oczywiste, jednakże życie
                    potrafi pisać różne scenariusze, dlatego pomożemy Ci doprowadzić sprawę do
                    satysfakcjonującego Cię rezultatu.
                </p>
            </section>
        </section>
        <Footer />
    </>
}

export default PrawoRodzinne;