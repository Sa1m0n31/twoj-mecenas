import React from 'react'

import axios from 'axios'

const Kontakt = () => {

    const handleSubmit = () => {
        alert("handle submit");
        const data = {
            imie: "Szymon",
            wiadomosc: "Wiadomość testowa"
        };

        axios.post("http://localhost:5000/send", data)
            .then((res) => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })


    }
    return <section className="kontakt">
        <button onClick={() => handleSubmit() }>
            Wyślij
        </button>
    </section>
}

export default Kontakt;