import React from 'react'

const Footer = () => {
    return <footer className="footer">
        <div className="footerCol">
            <h4 className="footer__header">
                Dane kontaktowe
            </h4>

            <div className="footer__contact">
                <h5 className="footer__contact__data bold">Twój Mecenas sp. z o.o.</h5>
                <h5 className="footer__contact__data">ul. Towarowa 20B</h5>
                <h5 className="footer__contact__data">10-417 Olsztyn</h5>
            </div>

            <div className="footer__contact">
                <h5 className="footer__contact__data">E-mail: biuro@twojmecenas.pl </h5>
                <h5 className="footer__contact__data">Telefon: 600 100 900</h5>
            </div>
        </div>

        <div className="footerCol">
            <h4 className="footer__header">
                Szybka nawigacja
            </h4>

            <ul className="footer__contact">
                <li className="footer__contact__data"><a href="/">Strona główna</a></li>
                <li className="footer__contact__data"><a href="/#oferta">Oferta</a></li>
                <li className="footer__contact__data"><a href="/#oNas">O nas</a></li>
                <li className="footer__contact__data"><a href="/#opinie">Opinie i referencje</a></li>
                <li className="footer__contact__data"><a href="/#kontakt">Kontakt</a></li>
            </ul>
        </div>

        <div className="footerCol">
            <h4 className="footer__header">
                Przydatne linki
            </h4>

            <ul className="footer__contact">
                <li className="footer__contact__data"><a href="/odszkodowania">Odszkodowania</a></li>
                <li className="footer__contact__data"><a href="/prawo-karne">Prawo karne</a></li>
                <li className="footer__contact__data"><a href="/prawo-rodzinne">Prawo rodzinne</a></li>
                <li className="footer__contact__data"><a href="/windykacja">Windykacja</a></li>
                <li className="footer__contact__data"><a href="/teleporady">Teleporady</a></li>
            </ul>
        </div>

        <div className="footer__bottom">
            <h5 className="footer__caption">
                &copy; {new Date().getFullYear()} Twój Mecenas Spółka z ograniczoną odpowiedzialnością. Wszelkie prawa zastrzeżone.
            </h5>
            <h5 className="footer__caption">
                Projekt i realizacja: <a href="https://skylo.pl" target="_blank" rel="noreferrer">skylo.pl</a>
            </h5>
        </div>
    </footer>
}

export default Footer;