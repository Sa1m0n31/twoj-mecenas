import React from 'react'

import landing from './../static/img/twojmecenas-hero.png'

const Landing = () => {
    return <div className="landing">
        <img className="landing__img" src={landing} alt="twoj-mecenas-oferta" />
        <div className="landing__header">
            Nasza oferta
        </div>
    </div>
}

export default Landing;