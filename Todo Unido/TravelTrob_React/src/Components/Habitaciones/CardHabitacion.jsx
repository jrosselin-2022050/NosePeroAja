import React from 'react';
import '../CSS/Card.css'

export const CardHabitacion = ({ disponibilidad, numeroCuarto, descripcion, precio }) => {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h2 className="card-title">{disponibilidad}</h2>
                    <p className="card-description">{numeroCuarto}</p>
                    <p className="card-description">{descripcion}</p>
                    <p className="card-description">{precio}</p>
                    <button>Ver mas...</button>
                </div>
            </div>
        </div>
    );
};