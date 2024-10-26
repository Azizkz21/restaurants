import { useCallback, useState } from "react";
import { UserContext } from ".";

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState({ isAuthorized: false });

  const valid = useCallback(() => {
    setLogin((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : {
            isAuthorized: true,
            userName: "ANONIM",
            userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e66",
          };
    });
  }, []);

  return (
    <UserContext.Provider value={{ login, valid}}>
      {children}
    </UserContext.Provider>
  );
};
