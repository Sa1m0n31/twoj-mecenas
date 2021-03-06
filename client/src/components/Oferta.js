import React, { useEffect, useRef } from 'react'

import { gsap, ScrollTrigger } from 'gsap/all';

const Oferta = () => {
    let o1 = useRef(null);
    let o2 = useRef(null);
    let o3 = useRef(null);
    let o4 = useRef(null);
    let o5 = useRef(null);
    let o6 = useRef(null);

    let o7 = useRef(null);
    let o8 = useRef(null);
    let o9 = useRef(null);
    let o10 = useRef(null);
    let o11 = useRef(null);

    let o13 = useRef(null);
    let o14 = useRef(null);
    let o15 = useRef(null);
    let o16 = useRef(null);
    let o17 = useRef(null);
    let o18 = useRef(null);

    let o19 = useRef(null);
    let o20 = useRef(null);
    let o21 = useRef(null);

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
        gsap.to(o20.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o20",
                start: "top 70%"
            }});
        gsap.to(o21.current, { opacity: 1, duration: .5, scrollTrigger: {
                trigger: "#o21",
                start: "top 70%"
            }});

    }, []);

    return <div className="oferta">
        <span id="oferta"></span>
        <section className="oferta__section">
            <h3 className="oferta__header">
                Odszkodowania
            </h3>

            <section className="oferta__subsection" ref={o1} id="o1">
                <h4 className="oferta__subsection__header">
                    wypadek komunikacyjny
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
                    obrażenia ciała
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
                    śmierć osoby bliskiej
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
                    błąd medyczny
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
                    wypadek przy pracy
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
                    odwołany/opóźniony lot
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

        <section className="oferta__section">
            <h3 className="oferta__header">
                Prawo karne
            </h3>

            <section className="oferta__subsection" ref={o7} id="o7">
                <h4 className="oferta__subsection__header">
                    postępowanie przygotowawcze
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
                    postępowanie sądowe
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
                    postępowanie wykonawcze
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
                    wyroki łączne
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
                    wykroczenia
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
                    przestępstwa i wykroczenia skarbowe
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
    </div>
}

export default Oferta;