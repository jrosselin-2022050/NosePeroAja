import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getHotelsRequest } from "../../Services/api";

export const useHotel = () => {
  const [hotels, setHotels] = useState(false)

  /* const hotel = async(
    nombre,
    direccion,
    telefono,
    descripcion,
    categoria
  ) =>{
    setIsLoading
  } */

  const getHotels = async()=>{
    const response = await getHotelsRequest()
    if(response.error){
      return toast.error(
        'Error al obtener los hoteles'
      )
    }
    setHotels(response.data.hoteles)
  }

  return {
    getHotels,
    hotels,
    isFetching: !hotels
  }
}


