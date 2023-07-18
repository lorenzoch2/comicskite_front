import Navbar from './NavbarJwt';
import jwt_decode from "jwt-decode";

const Productos = () => {
    const token = localStorage.getItem('token');

    // Función para decodificar el payload del token
    const decodeTokenPayload = () => {
        try {
            // Divide el token por el punto (.)
            const payload = jwt_decode(token);

            return payload;
        } catch (error) {
            console.error('Error al decodificar el token:', error);
            return null;
        }
    };

    const payload = decodeTokenPayload();

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
