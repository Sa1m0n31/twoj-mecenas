import React, { useEffect, useRef } from 'react'
import Menu from "../components/Menu";
import {gsap, ScrollTrigger} from "gsap/all";
import Footer from "../components/Footer";

const Odszkodowania = () => {
    let o1 = useRef(null);
    let o2 = useRef(null);
    let o3 = useRef(null);
    let o4 = useRef(null);
    let o5 = useRef(null);
    let o6 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(o1.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o1",
                start: "top 70%"
            }});
        gsap.to(o2.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o2",
                start: "top 70%"
            }});
        gsap.to(o3.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o3",
                start: "top 70%"
            }});
        gsap.to(o4.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o4",
                start: "top 70%"
            }});
        gsap.to(o5.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o5",
                start: "top 70%"
            }});
        gsap.to(o6.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o6",
                start: "top 70%"
            }});
    }, []);

    return <>
        <Menu backToFront={true} />
        <section className="oferta__section">
            <h3 className="oferta__header">
                Odszkodowania
            </h3>

            <section className="oferta__subsection" ref={o1} id="o1">
                <h4 className="oferta__subsection__header">
                    Wypadek komunikacyjny
                    <span className="oferta__subsection__number">
                        a)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Stało się! Masz wymarzony samochód, o który troszczysz się i dbasz jak o członka rodziny, jednak wystarczyła chwila nieuwagi i bum! No cóż, „zdarza się najlepszym”. :-) <br/><br/>Jeśli Twój pojazd został uszkodzony w wyniku wypadku lub kolizji i chcesz ubiegać się o odszkodowanie z OC sprawcy albo swojego AC możesz liczyć na naszą pomoc poprzez bezpłatną analizę Twojej sprawy. Dzięki temu przedstawimy Ci możliwości działania i zaproponujemy korzystne warunki dalszej współpracy. Biorąc pod uwagę fakt, że zdecydowana większośćproponowanych odszkodowań jest znacznie zaniżona, dzięki naszej pomocy możesz uzyskać należne Ci pieniądze.
                </p>
            </section>

            <section className="oferta__subsection" ref={o2} id="o2">
                <h4 className="oferta__subsection__header">
                    Obrażenia ciała
                    <span className="oferta__subsection__number">
                        b)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Mówią „przezorny zawsze ubezpieczony”, ale jak wiadomo „wypadki chodząpo ludziach”. Jeżeli doznałeś obrażeń ciała w wyniku wypadku komunikacyjnego albo nieszczęśliwego wypadku i chcesz ubiegać się o odszkodowanie z OC sprawcy, swojego ubezpieczenia NNW lub dodatkowego ubezpieczenia grupowego możesz liczyć na naszą pomoc poprzez bezpłatnąanalizę Twojej sprawy. Dzięki temu przedstawimy Ci możliwości działania i zaproponujemy korzystne warunki dalszej współpracy. Niestety w większości spraw ubezpieczyciele zaniżają wypłacane świadczenia, lecz dzięki naszemu wsparciu możesz uzyskać należne Ci pieniądze w postaci zadośćuczynienia za doznane krzywdy, zwrotu kosztów leczenia i opieki, zwrotu utraconych dochodów, renty na zwiększone potrzeby.
                </p>
            </section>

            <section className="oferta__subsection" ref={o3} id="o3">
                <h4 className="oferta__subsection__header">
                    Śmierć osoby bliskiej
                    <span className="oferta__subsection__number">
                        c)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Jeżeli Twoja osoba bliska poniosła śmierć w wyniku wypadku komunikacyjnego, wypadku przy pracy lub nieszczęśliwego wypadku możesz ubiegać się o stosowne zadośćuczynienie lub odszkodowanie. W takiej sytuacji możesz liczyć na naszą pomoc poprzez bezpłatną analizę Twojej sprawy. Dzięki temu przedstawimy Ci możliwości działania i zaproponujemy korzystne warunki dalszej współpracy. Jesteśmy świadomi, że śmierć bliskiej osoby jest ciężkim przeżyciem, dlatego jesteśmy po to, aby wesprzeć Cię we wszelkich formalnościach związanych ze zmaganiem się z ubezpieczycielem.
                </p>
            </section>

            <section className="oferta__subsection" ref={o4} id="o4">
                <h4 className="oferta__subsection__header">
                    Błąd medyczny
                    <span className="oferta__subsection__number">
                        d)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Każdy z nas zna dowcipy z cyklu „przychodzi baba do lekarza...”. Doskonale
                    wiemy, że nikt nie jest nieomylny, zaś nie myli się tylko ten, co nic nie robi.
                    Jednakże od personelu medycznego wymagamy szczególnej staranności i
                    profesjonalizmu.
                    Jeżeli w wyniku błędu medycznego, np. w trakcie operacji bądź w związku z
                    błędną diagnozą, doznałeś uszczerbku na zdrowiu, możesz ubiegać się o
                    odszkodowanie lub zadośćuczynienie. Biorąc pod uwagę, że tego typu sprawy

                    są skomplikowane, wymagają skompletowania odpowiedniej dokumentacji
                    oraz udowodnienia związku przyczynowo-skutkowego, pomoc prawnika jest
                    nieoceniona. W związku z tym, możesz liczyć na nasze wsparcie poprzez
                    bezpłatną analizę Twojej sprawy. Dzięki temu przedstawimy Ci możliwości
                    działania i zaproponujemy korzystne warunki dalszej współpracy.
                </p>
            </section>

            <section className="oferta__subsection" ref={o5} id="o5">
                <h4 className="oferta__subsection__header">
                    Wypadek przy pracy
                    <span className="oferta__subsection__number">
                        e)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Bezpieczeństwo i higiena pracy to podstawa, ale jak wiemy- „wypadki chodzą
                    po ludziach”. Dlatego jeżeli w związku z wykonywaną pracą doznałeś obrażeń
                    ciała albo bliska Ci osoba poniosła śmierć, możesz ubiegać się o
                    zadośćuczynienie lub odszkodowanie, w tym swojego ubezpieczenia NNW lub
                    dodatkowego ubezpieczenia grupowego oraz jednorazowe odszkodowanie z
                    ZUS-u, W takiej sytuacji możesz liczyć na naszą pomoc poprzez bezpłatną
                    analizę Twojej sprawy. Dzięki temu przedstawimy Ci możliwości działania i
                    zaproponujemy korzystne warunki dalszej współpracy.
                </p>
            </section>

            <section className="oferta__subsection" ref={o6} id="o6">
                <h4 className="oferta__subsection__header">
                    Odwołany/opóźniony lot
                    <span className="oferta__subsection__number">
                        f)
                    </span>
                </h4>
                <p className="oferta__subsection__text">
                    Wykupiłeś wymarzone wakacje, stoisz na lotnisku z walizką w dłoni,
                    myślami jesteś na piaszczystej plaży... i nagle okazuje się, że Twój lot jest
                    opóźniony bądź odwołany.
                    Jeżeli znalazłeś się w takiej sytuacji, możesz ubiegać się o odszkodowanie z
                    tego tytułu. Nie ma przy tym znaczenia, czy był to lot na wymarzone wakacje
                    czy podróż służbowa. Linie lotnicze często bezpodstawnie odmawiają wypłaty
                    odszkodowania, dlatego ważna jest właściwa argumentacja reklamacji. Nie
                    daj się również „wpuścić w maliny” podczas proponowanej rekompensaty w
                    formie vouchera, gdyż nie jest adekwatna do należnego Ci świadczenia. W
                    związku z tym możesz liczyć na naszą pomoc poprzez bezpłatną analizę
                    Twojej sprawy. Dzięki temu przedstawimy Ci możliwości działania i
                    zaproponujemy korzystne warunki dalszej współpracy.
                </p>
            </section>
        </section>
        <Footer />
    </>
}

export default Odszkodowania;