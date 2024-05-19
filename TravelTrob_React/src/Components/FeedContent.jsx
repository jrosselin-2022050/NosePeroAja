import { Navbar } from './Navbar.jsx';
import { Card } from './Card.jsx';
import '../Pages/Feed/Feed.css'
import { useEffect } from 'react';
import { useHotel } from '../Shared/Hooks/useHotel.jsx'


export const FeedContent = () => {
    const { getHotels, hotels, isFetching } = useHotel()
    let nombreCategory = []

    useEffect(() => {
        getHotels()
    }, [])

    if (isFetching) {
        return (
            <span>Loading...</span>
        )
    }

    for (let i = 0; i < hotels.length; i++) {
      for (let j = 0; j < hotels[i].length; j++) {
        nombreCategory.push(hotels[j][i].nombreCategory)
      }
    }

    return (
        <div>
            <div className='NavBarBuscar'>
                <Navbar />
            </div>
            <div className='feed-content'>
              <div className='TituloFeed'>
                  <h1>Explora Nuestros Hoteles</h1>
              </div>
              {
                hotels.map((categoriaHoteles, i) => (
                  <div key={i} className='hotel-category'>
                    <div className='TituloFeed'>
                  </div>
                    <h1>{categoriaHoteles.titulo}</h1>
                    <div className='hotel-cards'>
                      {
                        categoriaHoteles.hoteles.map((hotel, j) => (
                          <Card
                            key={j}
                            title={hotel.nombre}
                            image={hotel.imagen}
                            description={hotel.descripcion}
                          />
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    )
}
