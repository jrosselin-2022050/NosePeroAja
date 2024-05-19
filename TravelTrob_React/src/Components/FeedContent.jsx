import { Navbar } from './Navbar.jsx';
import { Card } from './Card.jsx';
import '../Pages/Feed/Feed.css'
import { useEffect } from 'react';
import { useHotel } from '../Shared/Hooks/useHotel.jsx'


export const FeedContent = () => {
    const { getHotels, hotels, isFetching } = useHotel()

  useEffect(() => {
    getHotels()
  }, [])

  if (isFetching) {
    return (
      <span>Loading...</span>
    )
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

        <div className='hotel-cards'>
          {
            hotels.map((hotel, i) => {
              return (
                <Card
                  key={i}
                  title={hotel.nombre}
                  image={hotel.imagen}
                  description={hotel.descripcion}
                />
              )
            })
          }
        </div>
        <div className='hotel-cards'>
          {
            hotels.map((hotel, i) => {
              return (
                <Card
                  key={i}
                  title={hotel.nombre}
                  image={hotel.imagen}
                  description={hotel.descripcion}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};