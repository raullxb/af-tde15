import { useContext } from "react";
import { ContadorContext } from "../contexts/ContadorContext";

export default function DisplayContador() {
    const { contador } = useContext(ContadorContext);

    return (
        <h2>Valor Atual: {contador}</h2>
    );
}
