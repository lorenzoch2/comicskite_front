import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const RegistroUsuario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        telefono: '',
        contrasena: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Aquí va la URL del backend donde se procesará el formulario
            const response = await axios.post('http://localhost:3000/registrar', formData);

            // Si el registro fue exitoso, muestra el toast de éxito y redirecciona a la página de inicio de sesión
            if (response.data.success) {
                toast.success('Usuario creado satisfactoriamente');
                window.location.href = '/iniciar_sesion';
            } else {
                // Si ocurrió un error en el registro, muestra el toast de error
                toast.error('Error. Por favor, complete correctamente el formulario.');
            }
        } catch (error) {
            // Si hubo un error en la petición, muestra el toast de error
            toast.error('Error al procesar el formulario. Intente nuevamente más tarde.');
        }
    };

    return (
        <div>
            <h2 style={{ color: '#ebca6d' }}>REGISTRO DE USUARIO</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: '#ebca6d' }}>Nombre:</label>
                    <div className="col-sm-10 ">
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: '#ebca6d' }}>Apellido:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: '#ebca6d' }}>E-mail:</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: '#ebca6d' }}>Dirección:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: '#ebca6d' }}>Teléfono:</label>
                    <div className="col-sm-10">
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: '#ebca6d' }}>Contraseña:</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row justify-content-end">
                    <div className="col-sm-10 text-right">
                    <Button variant="primary" style={{ backgroundColor: 'black', borderColor: '#ebca6d', color: '#ebca6d', marginLeft: '10px', fontSize: '12px'  }}>Agregar</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistroUsuario;
