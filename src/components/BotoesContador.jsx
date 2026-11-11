import { useContext } from "react";
import { ContadorContext } from "../contexts/ContadorContext";
export default function BotoesContador() {
    const { setContador } = useContext(ContadorContext);
    return (
        <div className="counter-buttons">
            <button onClick={() => setContador(prev => prev + 1)}>Incrementar</button>
            <button onClick={() => setContador(prev => prev - 1)}>Decrementar</button>
        </div>
    );
} 
