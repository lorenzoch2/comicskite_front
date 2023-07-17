import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from '@mui/material';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        contrasena: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Aquí va la URL del backend donde se realizará el inicio de sesión
            const response = await axios.post('http://localhost:3000/login', formData);
            console.log(response.data);
            // Si el inicio de sesión fue exitoso, guarda el token en el local storage y muestra el toast de éxito
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                toast.success('Inicio de sesión exitoso');
                navigate('/productos'); // Redirección a /productos después de un inicio de sesión exitoso
            } else {
                toast.error('Error. Por favor, verifica tus credenciales.');
            }
        } catch (error) {
            toast.error('Error al procesar el inicio de sesión. Intente nuevamente más tarde.');
        }
    };
    const textFieldStyle = {
        background: 'white',
    };
    return (
        <div>
            <h2 style={{ color: '#ebca6d' }}>INICIAR SESIÓN</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: '#ebca6d' }}>E-mail:</label>
                    <div className="col-sm-10">
                        <TextField
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'email-name', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row my-3">
                    <label className="col-sm-2 col-form-label label-bold text-uppercase" style={{ color: '#ebca6d' }}>Contraseña:</label>
                    <div className="col-sm-10">
                        <TextField
                            type="password"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                style: textFieldStyle,
                                autoComplete: 'password-name', // suggested autocomplete attribute
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row justify-content-end">
                    <div className="col-sm-10 text-right">
                        <Button type="submit" variant="contained" style={{ backgroundColor: 'black', color: '#ebca6d', marginLeft: '10px', fontSize: '12px', border: '2px solid #ebca6d'  }}>
                            Iniciar sesión
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
