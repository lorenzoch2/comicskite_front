import { useEffect, useState } from 'react';
import Navbar from './Navbar'

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
            <Navbar />

            <div style={{ backgroundColor: '#295b6fff', padding: '1rem' }}>
                <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                    <div style={{ backgroundColor: '#295b6fff', padding: '1rem', border: '1px solid white' }}>
                    <div style={{ wordBreak: 'break-all', color: 'white'}}>
                        <p>Token: {tokenContent}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productos;
