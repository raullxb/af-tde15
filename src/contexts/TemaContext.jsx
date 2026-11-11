import {createContext, useState} from "react";

export const TemaContext = createContext();

export function TemaProvider({children}) {
    const [tema, setTema] = useState('claro');

     const toggleTema = () => {
        setTema((prevTema) => (prevTema === 'claro' ? 'escuro' : 'claro'));
    }

    return (
        <TemaContext.Provider value={{tema, toggleTema}}>
            {children}
        </TemaContext.Provider>
    )
}