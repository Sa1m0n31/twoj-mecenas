import React, { useEffect, useRef } from 'react'
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import { gsap, ScrollTrigger } from 'gsap/all'

const PrawoKarne = () => {
    let o7 = useRef(null);
    let o8 = useRef(null);
    let o9 = useRef(null);
    let o10 = useRef(null);
    let o11 = useRef(null);
    let o13 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(o7.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o7",
                start: "top 70%"
            }});
        gsap.to(o8.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o8",
                start: "top 70%"
            }});
        gsap.to(o9.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o9",
                start: "top 70%"
            }});
        gsap.to(o10.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o10",
                start: "top 70%"
            }});
        gsap.to(o11.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o11",
                start: "top 70%"
            }});
        gsap.to(o13.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o13",
                start: "top 70%"
            }});
    }, []);

    return <>
        <Menu backToFront={true} />
        <section className="oferta__section">
            <h3 className="oferta__header">
                Prawo karne
            </h3>

            <section className="oferta__subsection" ref={o7} id="o7">
                <h4 className="oferta__subsection__header">
                    Postępowanie przygotowawcze
                    <span className="oferta__subsection__number">
                        a)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Zostałeś zatrzymany lub jesteś o coś podejrzany?
                    Twoje wyjaśnienia w początkowej fazie postępowania karnego mają ogromne
                    znaczenie na dalszym etapie, jak również mogą zaważyć na efekcie
                    końcowym procesu. Biorąc pod uwagę fakt, że przesłuchanie przez organy
                    ścigania jest bardzo stresujące przyda Ci się wsparcie doświadczonego
                    obrońcy. Mamy dla Ciebie dobrą wiadomość - znamy takich!
                    <br/><br/>
                    Zostałeś pokrzywdzony w wyniku przestępstwa?
                    Pomożemy Ci w złożeniu zawiadomienia o podejrzeniu popełnienia
                    przestępstwa, będziemy wspierać Cię przez cały etap postępowania
                    przygotowawczego, a w przypadku wydania przez organy ścigania decyzji o
                    odmowie wszczęcia postępowania albo jego umorzeniu, złożymy zażalenie do
                    sądu.
                </p>
            </section>

            <section className="oferta__subsection" ref={o8} id="o8">
                <h4 className="oferta__subsection__header">
                    Postępowanie sądowe
                    <span className="oferta__subsection__number">
                        b)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Wobec Ciebie został skierowany akt oskarżenia?
                    Tak naprawdę świat się jeszcze nie zawalił. Obrońca przygotuje Twoją linię
                    obrony tak, aby żadna okoliczność Cię nie zaskoczyła. Ponadto złoży wnioski
                    dowodowe zmierzające do osiągnięcia korzystnego dla Ciebie rezultatu, a
                    przede wszystkim będzie dbał o to, żeby Twoje prawa były przestrzegane.
                    Dzięki temu z pozoru beznadziejna sytuacja może zakończyć się dla Ciebie
                    pomyślnie.
                    <br/><br/>
                    Wobec sprawcy przestępstwa, w wyniku którego zostałeś pokrzywdzonym,
                    skierowano akt oskarżenia do sądu?
                    Pełnomocnik zadba o to, abyś występował jako strona w tym procesie, co
                    umożliwi Ci wpływ na postępowanie dowodowe i ewentualnie złożenie
                    odwołania od wyroku, który nie będzie Cię w pełni satysfakcjonował. Co
                    więcej, pełnomocnik w Twoim imieniu złoży wnioski o naprawienie szkody,
                    przyznanie Ci zadośćuczynienia lub nawiązki, a także zadba o zastosowanie
                    wobec sprawcy środków karnych tak, aby odczuł on dolegliwość wynikającą
                    z wydanego przez sąd wyroku.
                </p>
            </section>

            <section className="oferta__subsection" ref={o9} id="o9">
                <h4 className="oferta__subsection__header">
                    Postępowanie wykonawcze
                    <span className="oferta__subsection__number">
                        c)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Kiedy wydaje Ci się, że już wszystko stracone i będziesz miał „przerwę w
                    życiorysie” dzięki naszej pomocy możesz dostrzec światełko w tunelu (i nie
                    będzie to nadjeżdżający pociąg ;)).
                    Zgłoś się do nas! Zaczniemy od wstrzymania osadzenia Cię w zakładzie
                    karnym, następnie przeanalizujemy najkorzystniejsze dla Ciebie rozwiązanie:
                    odroczenie wykonania kary czy też odbycie jej w ramach dozoru
                    elektronicznego. W przypadku kar innych niż pozbawienie wolności też
                    jesteśmy Ci w stanie pomóc.
                    <br/><br/>
                    Trafiłeś już do zakładu karnego?
                    Jeszcze nie jest za późno na działanie. Możesz liczyć na pomoc przy
                    uzyskaniu przerwy w odbywaniu kary oraz pomoc przy udzieleniu
                    warunkowego przedterminowego zwolnienia, tzw. „wokandy”.
                </p>
            </section>

            <section className="oferta__subsection" ref={o10} id="o10">
                <h4 className="oferta__subsection__header">
                    Wyroki łączne
                    <span className="oferta__subsection__number">
                        d)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Jak to mówią: nieznajomość prawa szkodzi, a biorąc pod uwagę fakt, że
                    przepisy dotyczące wyroków łącznych w ciągu ostatnich 6 lat zmieniły się
                    wielokrotnie, możesz nie być „na bieżąco”. Pomożemy Ci przeanalizować
                    Twoją sytuację, wybrać najkorzystniejsze rozwiązanie, a następnie przekonać
                    sąd do zastosowania w Twoim przypadku zasady absorpcji.
                </p>
            </section>

            <section className="oferta__subsection" ref={o11} id="o12">
                <h4 className="oferta__subsection__header">
                    Wykroczenia
                    <span className="oferta__subsection__number">
                        e)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Z pozoru są to sprawy mniejszej wagi, ale dlaczego masz zostać z nimi sam?
                    Jeżeli wobec Ciebie został skierowany wniosek o ukaranie do sądu, to
                    niestety zazwyczaj sąd wyda wyrok nakazowy bez Twojego udziału w
                    postępowaniu. Skontaktuj się z nami niezwłocznie! Pomożemy Ci dochować
                    wszystkich wymaganych terminów w celu skierowania sprawy do
                    rozpoznania na rozprawie, gdzie złożymy wnioski dowodowe zmierzające do
                    osiągnięcia korzystnego dla Ciebie rezultatu.
                </p>
            </section>

            <section className="oferta__subsection" ref={o13} id="o13">
                <h4 className="oferta__subsection__header">
                    Przestępstwa i wykroczenia skarbowe
                    <span className="oferta__subsection__number">
                        f)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Jak to mówią: „z fiskusem nie zadzieraj”, ale kiedy już Ci się to przydarzyło
                    to możesz liczyć na naszą pomoc. Z doświadczenia wiemy, że dla osoby
                    nieobeznanej z prawem jest to postępowanie skomplikowane, co ułatwia
                    organom ścigania jego prowadzenie. Dzięki naszemu wsparciu będziesz czuł
                    się pewniej i postępowanie może zakończyć się dla Ciebie pomyślnie.
                </p>
            </section>
        </section>
        <Footer />
    </>
}

export default PrawoKarne;