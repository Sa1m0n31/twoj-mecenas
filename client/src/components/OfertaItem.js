import React from 'react'

const OfertaItem = ({image, title, text, link, myRef, id}) => {
    return <div className="oferta__item" id={id} ref={myRef}>
        <div className="oferta__item__imgWrapper">
            <img className="oferta__item__img" src={image} alt="odszkodowania" />
        </div>
        <h3 className="oferta__item__header">
            {title}
        </h3>
        <p className="oferta__item__text">
            {text}
        </p>
        <button className="oferta__item__button">
            <a href={link}>
                <span></span>
                Dowiedz się więcej
            </a>
        </button>
    </div>
}

export default OfertaItem;