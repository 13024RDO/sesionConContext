import React from "react";
import { SessionProvider, useSession } from "./context/SessionProvier";
import Login from "./components/Login";
import Home from "./components/Home";

const AppContent = () => {
  const { session } = useSession();

  return session ? <Home /> : <Login />;
};

const App = () => {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  );
};

export default App;
