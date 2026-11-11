import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserInfo() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Usuário</h2>
      <p>Nome: {user.name || "Não informado"}</p>
      <p>Email: {user.email || "Não informado"}</p>
    </div>
  );
}