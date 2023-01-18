import '@/styles/globals.css'
import { AuthContext } from '@/context/authContext'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <Component {...pageProps} />
        </AuthContext.Provider>
    )
}
