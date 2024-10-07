import { useState } from "react";
import { UserContext } from ".";

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const valid = (userFalse) => {
    setLogin(userFalse);
  };

  return (
    <UserContext.Provider value={{ login, valid }}>
      {children}
    </UserContext.Provider>
  );
};
