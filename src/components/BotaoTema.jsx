import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

export default function BotaoTema() {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <button onClick={toggleTema}>
      Mudar para tema {tema === 'claro' ? 'escuro' : 'claro'}
    </button>
  );
}