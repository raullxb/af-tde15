import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function AuthForm() {
  const { setUser } = useContext(UserContext);
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: nome, email: email });
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      <input 
        type="text" 
        placeholder="Nome de Usuário" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
  );
}