import Navbar from "../components/NavbarNotFound";
export default function NotFound() {
    return (
        <div>
        <Navbar />
        <div style={{ backgroundColor: '#295b6fff', padding: '1rem' }}>
            <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                <div style={{ backgroundColor: '#295b6fff', padding: '1rem', border: '1px solid white' }}>
                    <h3 style={{ color: '#ebca6d' }}>Página no encontrada</h3>
                </div>
            </div>
        </div>
    </div>
    );
}
