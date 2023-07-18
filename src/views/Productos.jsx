import Navbar from './NavbarJwt';
import decodeTokenPayload from '../services/services'

const Productos = () => {
    const token = localStorage.getItem('token');
    const payload = decodeTokenPayload(token);

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
