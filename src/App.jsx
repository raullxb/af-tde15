import UserInfo from "./components/UserInfo";
import AuthForm from "./components/AuthForm";
import DisplayContador from "./components/DisplayContador";
import BotoesContador from "./components/BotoesContador";

import { UserProvider } from "./contexts/UserContext";
import { TemaProvider } from "./contexts/TemaContext";
import { ContadorProvider } from "./contexts/ContadorContext";

export default function App() {
  return (
    <UserProvider>
      <TemaProvider>
        <ContadorProvider>
          <main className="app-content">
            <UserInfo />
            <AuthForm />
            <DisplayContador />
            <BotoesContador />
          </main>
        </ContadorProvider>
      </TemaProvider>
    </UserProvider>
  );
}