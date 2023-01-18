import Route from 'next/router';
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";

export default function Login() {
    const [data, setData] = useState({});
    function handleChange(e) {
        setData({...data, [e.target.name]: e.target.value});
    }

    const {isAuth, setIsAuth} = useContext(AuthContext);
    function handleClick() {
        setIsAuth(true);

        if (data.usuario == 'chaleco' && data.contrasena == '1234') {
            Route.push('/dashboard');
        }
    }

    useEffect(() => {
        console.log(isAuth)
    }, [isAuth])

    return (
        <div>
            <div>
                <h3>Iniciar sesión</h3>
                <input type="text" onChange={handleChange} name="usuario" placeholder="Usuario" /> <br />
                <input type="password" onChange={handleChange} name="contrasena" placeholder="Contraseña" /> <br />
                <button onClick={handleClick}>Iniciar</button>
            </div> <br />
        </div>
    )
}
