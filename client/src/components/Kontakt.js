import React, { useState, useEffect, useRef } from 'react'

import { useFormik } from "formik";
import * as Yup from 'yup'

import axios from 'axios'
import { gsap, ScrollTrigger } from 'gsap/all';

import check from './../static/img/check.png'

const Kontakt = () => {
    let [telefon, setTelefon] = useState(false);
    let [email, setEmail] = useState(false);
    let [send, setSend] = useState(false);

    let kontakt = useRef(null);
    let kontaktHeader = useRef(null);
    let potwierdzenie = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set([kontakt.current, kontaktHeader.current], { opacity: 0 });

        gsap.to(kontaktHeader.current, { opacity: 1, duration: .4, scrollTrigger: {
                trigger: ".kontakt__header",
                start: "top 50%"
            } });
        gsap.to(kontakt.current, { opacity: 1, duration: .4, scrollTrigger: {
            trigger: ".kontakt",
                start: "top 50%"
            } });
    }, []);

    useEffect(() => {
        if(telefon) setEmail(false);
    }, [telefon]);

    useEffect(() => {
        if(email) setTelefon(false);
    }, [email]);

    const formik = useFormik({
        initialValues: {
            imie: "",
            nazwisko: "",
            numerTelefonu: "",
            adresEmail: "",
            wiadomosc: ""
        },
        validationSchema: Yup.object({
            numerTelefonu: Yup.string()
                .required('Required'),
            adresEmail: Yup.string()
                .email('Email')
                .required('Required')

        }),
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            setSend(true);
            afterSubmit();
            formik.resetForm();
        }
    });

    useEffect(() => {
        if(send) {
            console.log("error email");
            console.log(formik.errors.adresEmail);
        }
    }, [formik.errors.adresEmail, send]);

    const afterSubmit = () => {
        const tl = gsap.timeline();
        tl.to(kontakt.current, { x: 2000, duration: .5 });
        tl.to(potwierdzenie.current, { opacity: 1, duration: .4 });

        formik.initialValues = {
            imie: "",
            nazwisko: "",
            numerTelefonu: "",
            adresEmail: "",
            wiadomosc: ""
        }

        setTimeout(() => {
            setSend(false);
            const tl2 = gsap.timeline();
            tl2.to(potwierdzenie.current, { opacity: 0, duration: .4 });
            tl2.fromTo(kontakt.current, { x: -2000 }, { x: 0, duration: .5 });
        }, 3000);
    }

    const checkSubmit = e => {
        e.preventDefault();

        if((formik.errors.adresEmail)||(formik.errors.numerTelefonu)) {
            gsap.to(kontakt.current, { x: +-20, yoyo: true, repeat: 10, duration: .05 });
            gsap.set(kontakt.current, { x:0 });
        }
        formik.handleSubmit();
    }

    return <section className="kontakt">
        <span id="kontakt"></span>
        <h2 className="kontakt__header" ref={kontaktHeader}>
            Masz pytania?<br/>
            Skorzystaj z <span className="bold">formularza kontaktowego</span>
        </h2>

        <form className="contactForm" onSubmit={formik.handleSubmit} ref={kontakt}>
            <label className="contactInputLabel">
                <input className="contactInput"
                       name="imie"
                       autoComplete="off"
                       value={formik.values.imie}
                       placeholder="Imie"
                       onChange={formik.handleChange}
                />
            </label>
            <label className="contactInputLabel">
                <input className="contactInput"
                       name="nazwisko"
                       autoComplete="off"
                       value={formik.values.nazwisko}
                       placeholder="Nazwisko"
                       onChange={formik.handleChange}
                />
            </label>

            <label className="contactInputLabel">
                <input className="contactInput"
                       name="adresEmail"
                       autoComplete="off"
                       value={formik.values.adresEmail}
                       placeholder="Adres email"
                       onChange={formik.handleChange}
                />
            </label>
            <label className="contactInputLabel">
                <input className="contactInput"
                       name="numerTelefonu"
                       autoComplete="off"
                       value={formik.values.numerTelefonu}
                       placeholder="Nr telefonu"
                       onChange={formik.handleChange}
                />
            </label>

            <label className="contactInputLabel contactTextareaLabel">
                <textarea className="contactTextarea"
                       name="wiadomosc"
                       value={formik.values.wiadomosc}
                       placeholder="Treść wiadomości"
                       onChange={formik.handleChange}
                />
            </label>

            <div className="formaKontaktu">
                <h3 className="formaKontaktu__header">
                    Preferowana forma kontaktu:
                </h3>
                <label>
                    <button className="formaKontaktu__button" onClick={(e) => {e.preventDefault(); setTelefon(!telefon)}}>
                        {telefon ? <img className="checkImg" src={check} alt="ok" /> : ""}
                    </button>
                    Telefon komórkowy
                </label>
                <label>
                    <button className="formaKontaktu__button" onClick={(e) => {e.preventDefault(); setEmail(!email)}}>
                        {email ? <img className="checkImg" src={check} alt="ok" /> : ""}
                    </button>
                    Adres email
                </label>
            </div>

            <button type="submit" className="submitBtn" onClick={(e) => checkSubmit(e) }>
                Wyślij
            </button>
        </form>

        <div className="potwierdzenie" ref={potwierdzenie}>
            <h4 className="potwierdzenie__text">
                Twój formularz został wysłany.<br/>Odezwiemy się do Ciebie w ciągu 24 godzin
            </h4>
        </div>
    </section>
}

export default Kontakt;