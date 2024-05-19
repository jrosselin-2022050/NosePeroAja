import { Auth } from "./Pages/Auth/Auth.jsx";
import { Info } from "./Components/Info.jsx";
import { Feed } from "./Pages/Feed/Feed.jsx";
import { Reserva } from "./Components/Reserva.jsx";
import { Register } from "./Components/Register.jsx";
import { ContentHabitacion } from "./Components/Habitaciones/ContentHabitacion.jsx";


export const routes = [
    { path: '/auth', element: <Auth /> },
    { path: '/feed', element: <Feed /> },
    { path: '/reserva', element: <Reserva /> },
    { path: '/*', element: <Info /> },
    {path: '/register', element: <Register/>},
    {path: '/habitaciones/:idHotel', element: <ContentHabitacion/>}
]
