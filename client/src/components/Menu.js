import React from 'react'

import logo from './../static/img/twojmecenas-logo.png'

const Menu = () => {
    return <menu className="topMenu">
        <img className="topMenu__logo" src={logo} alt="twoj-mecenas" />

        <ul className="topMenu__list">
            <li className="topMenu__item">
                Oferta
            </li>
            <li className="topMenu__item">
                O nas
            </li>
            <li className="topMenu__item">
                Opinie i referencje
            </li>
            <li className="topMenu__item">
                Kontakt
            </li>
        </ul>
    </menu>
}

export default Menu;