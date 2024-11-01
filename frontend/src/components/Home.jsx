import React from "react";
import { useSession } from "../context/SessionProvier";

const Home = () => {
  const { session, logout } = useSession();

  return (
    <div>
      <h1>Bienvenido, {session?.username}!</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Home;
