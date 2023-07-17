import RegistrarComp from "../components/Registrar";
import Navbar from "./Navbar"

export default function Registrar() {
  return (
    <div>
      <Navbar/>
      <div style={{ backgroundColor: '#295b6fff', padding: '1rem' }}>
        <div style={{ backgroundColor: 'black', padding: '1rem' }}>
          <div style={{ backgroundColor: '#295b6fff', padding: '1rem', border: '1px solid white' }}>
            <RegistrarComp/>
          </div>
        </div>
      </div>
    </div>
  )
}
