import IniciarSesion from "../components/IniciarSesion";
import Navbar from "./Navbar";

export default function Iniciar() {
    return (
        <div>
            <Navbar />

            <div style={{ backgroundColor: '#295b6fff', padding: '1rem' }}>
                <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                    <div style={{ backgroundColor: '#295b6fff', padding: '1rem', border: '1px solid white' }}>

                        <IniciarSesion />
                    </div>
                </div>
            </div>
        </div>

    )
}
