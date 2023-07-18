import jwt_decode from "jwt-decode";
// Función para decodificar el payload del token
export default function decodeTokenPayload (token) {
    try {
        // Divide el token por el punto (.)
        const payload = jwt_decode(token);
        return payload;
    } catch (error) {
        console.error('Error al decodificar el token:', error);
        return null;
    }
}

