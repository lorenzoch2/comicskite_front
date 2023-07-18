import Navbar from './NavbarJwt';
import Context from '../Context/Context';
import { useContext } from 'react';

const Productos = () => {
    const { tokenContent } = useContext(Context);

    // Función para decodificar el payload del token
    const decodeTokenPayload = () => {
        try {
            // Divide el token por el punto (.)
            const tokenParts = tokenContent.split('.');

            // Decodifica la segunda parte del token (que es el payload) y convierte el resultado a un objeto
            const payload = JSON.parse(window.atob(tokenParts[1]));

            return payload;
        } catch (error) {
            console.error('Error al decodificar el token:', error);
            return null;
        }
    };

    

    const payload = decodeTokenPayload();

    // useEffect(() => {
    //     // Retrieve the token from local storage
    //     const token = localStorage.getItem('token');

    //     // Decode the payload from the token
    //     try {
    //         const payload = JSON.parse(window.atob(token.split('.')[1]));
    //         setTokenContent(payload);
    //     } catch (error) {
    //         // Handle the error if the token is not valid or cannot be decoded
    //         console.error('Error decoding the token:', error);
    //     }
    // }, [setTokenContent]);

    return (
        <div>
            <Navbar />

            <div style={{ backgroundColor: '#295b6fff', padding: '1rem' }}>
                <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                    <div style={{ backgroundColor: '#295b6fff', padding: '1rem', border: '1px solid white' }}>
                        <div style={{ wordBreak: 'break-all', color: 'white' }}>
                            {/* Renderiza el payload en la interfaz */}
                            {payload ? (
                                <pre> {payload.id_usuario}<br/>
                                    {payload.email}<br/>
                                    {payload.administrador}<br/></pre>
                            ) : (
                                <p>Token no válido o no disponible.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productos;
