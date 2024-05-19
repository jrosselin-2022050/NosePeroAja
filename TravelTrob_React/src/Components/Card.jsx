import React from 'react';
import './CSS/Card.css'

export const Card = ({ title, image, description }) => {
    const urlBase = 'http://localhost:3200/Hotel/getImage/'
    return (
        <div>
            <div className="card">
                <img src={`${urlBase}${image}`} crossOrigin='anonymous' alt={title} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <button>Ver mas...</button>
                </div>
            </div>
        </div>
    );
};
