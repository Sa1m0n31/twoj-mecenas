import React, { useRef } from 'react'

import logo from './../static/img/twojmecenas-logo.png'
import close from './../static/img/close.png'

const Menu = ({backToFront}) => {
    let mobileMenu = useRef(null);
    let mobileList = useRef(null);
    let mobileExit = useRef(null);

    const openMenu = () => {
        mobileMenu.current.style.transform = "scaleY(1)";
        setTimeout(() => {
            mobileList.current.style.opacity = "1";
            mobileExit.current.style.opacity = "1";
        }, 500);
    }

    const closeMenu = () => {
        mobileList.current.style.opacity = "0";
        mobileExit.current.style.opacity = "0";
        setTimeout(() => {
            mobileMenu.current.style.transform = "scaleY(0)";
        }, 500);
    }

    const goTo = (n, mobile = false) => {
        let goToElement;
        switch(n) {
            case 0:
                if(backToFront) {
                    window.location.href = "/";
                    return 0;
                }
                goToElement = document.querySelector("body");
                break;
            case 1:
                if(backToFront) {
                    window.location.href = "/#oferta";
                    return 0;
                }
                goToElement = document.querySelector("#oferta");
                break;
            case 2:
                if(backToFront) {
                    window.location.href = "/#oNas";
                    return 0;
                }
                goToElement = document.querySelector("#oNas");
                break;
            case 3:
                if(backToFront) {
                    window.location.href = "/#opinie";
                    return 0;
                }
                goToElement = document.querySelector("#opinie");
                break;
            case 4:
                if(backToFront) {
                    window.location.href = "/#kontakt";
                    return 0;
                }
                goToElement = document.querySelector("#kontakt");
                break;
            default:
                break;
        }
        if(mobile) {
            closeMenu();
        }
        if(goToElement) {
            goToElement.scrollIntoView({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    return <menu className="topMenu">
        <button className="topMenu__logo__button" onClick={() => goTo(0)} >
            <img className="topMenu__logo" src={logo} alt="twoj-mecenas" />
        </button>

        <ul className="topMenu__list">
            <li className="topMenu__item" onClick={() => goTo(1)}>
                Oferta
            </li>
            <li className="topMenu__item" onClick={() => goTo(2)}>
                O nas
            </li>
            <li className="topMenu__item" onClick={() => goTo(3)}>
                Opinie i referencje
            </li>
            <li className="topMenu__item" onClick={() => goTo(4)}>
                Kontakt
            </li>
        </ul>

        <button className="hamburgerMenu" onClick={() => { openMenu() }}>
            <span className="hamburgerLine"></span>
            <span className="hamburgerLine"></span>
            <span className="hamburgerLine"></span>
        </button>

        <div className="topMenuMobile" ref={mobileMenu}>
            <button className="topMenuMobile__close" onClick={() => { closeMenu(); }} ref={mobileExit}>
                <img className="topMenuMobile__close__img" src={close} alt="exit" />
            </button>

            <ul className="topMenuMobile__list" ref={mobileList}>
                <li className="topMenu__item" onClick={() => goTo(1, true)}>
                    Oferta
                </li>
                <li className="topMenu__item" onClick={() => goTo(2, true)}>
                    O nas
                </li>
                <li className="topMenu__item" onClick={() => goTo(3, true)}>
                    Opinie i referencje
                </li>
                <li className="topMenu__item" onClick={() => goTo(4, true)}>
                    Kontakt
                </li>
            </ul>
        </div>
    </menu>
}

export default Menu;