import { AuthContext } from "../context/authContext";
import { useContext, useEffect } from "react";
import Route from "next/router";

export default function dashboard() {

    const { isAuth } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuth) {
            Route.push('/');
        }
        console.log(isAuth)
    }, [isAuth])

    return (
        <>
            {
                isAuth && <div>
                    <h1>Dashboard</h1>    
                </div>
            }
        </>
    )
}