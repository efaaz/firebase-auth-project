import React from "react";
import { useContext } from "react";
import { authProvider } from "../AuthProvider";

function Home() {
  const { name, email } = useContext(authProvider);
  return (
    <>
      <div className="text-center text-3xl mt-10">This is Home</div>
      <p className="text-center">{name}</p>
      <p className="text-center">{email}</p>
    </>
  );
}

export default Home;
