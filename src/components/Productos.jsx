import { useEffect, useState } from 'react';

const Productos = () => {
    const [tokenContent, setTokenContent] = useState('');

    useEffect(() => {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

        // Update the state with the content of the token
        setTokenContent(token);
    }, []);
    return (
        <div>
            <h2 style={{ color: '#ebca6d' }}>Contenido del Token</h2>
            <div>
                <p>{tokenContent}</p>
            </div>
        </div>
    );
};

export default Productos;
