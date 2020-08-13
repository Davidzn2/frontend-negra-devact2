import React from "react";
import Header from "./Layout/Header";
import { AuthContext } from "../contexts/AuthContext";
function Home(props) {
  const { user, isAuth } = React.useContext(AuthContext);
  return (
    <>
      <Header />
      {isAuth ? (
        <h1>Bienvenido, {user.first_name}</h1>
      ) : (
        <h1>Inicia sesión en el link de arriba</h1>
      )}
    </>
  );
}

export default Home;
