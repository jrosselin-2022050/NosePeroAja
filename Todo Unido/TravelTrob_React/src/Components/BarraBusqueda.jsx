import React from 'react'
import './CSS/Navbar.css'

export const BarraBusqueda = () => {
    return (
        <section className="search-section">
            <section className="search-section">
                <h1>Hola, ¿cómo podemos ayudarte?</h1>
                <div className="search-box">
                    <input type="text" placeholder="Buscar..." />
                </div>
            </section>
        </section>
    )
}

