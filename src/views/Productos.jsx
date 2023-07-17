import { useEffect } from 'react';
import Navbar from './NavbarJwt';
import Context from '../Context/Context';
import { useContext } from 'react';

const Productos = () => {
    const {tokenContent, setTokenContent} = useContext(Context);

    useEffect(() => {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

        // Decode the payload from the token
        try {
            const payload = JSON.parse(window.atob(token.split('.')[1]));
            setTokenContent(payload);
        } catch (error) {
            // Handle the error if the token is not valid or cannot be decoded
            console.error('Error decoding the token:', error);
        }
    }, [setTokenContent]);

    return (
        <div>
            <Navbar />

            <div style={{ backgroundColor: '#295b6fff', padding: '1rem' }}>
                <div style={{ backgroundColor: 'black', padding: '1rem' }}>
                    <div style={{ backgroundColor: '#295b6fff', padding: '1rem', border: '1px solid white' }}>
                        <div style={{ wordBreak: 'break-all', color: 'white' }}>
                            {tokenContent && (
                                <>
                                    <p>Token Payload: {JSON.stringify(tokenContent)}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productos;
