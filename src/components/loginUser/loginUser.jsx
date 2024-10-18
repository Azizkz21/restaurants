import classnames from "classnames";
import { loginUser } from "../materials/mockUser";
import style from "./loginUser.module.scss";
import { Button } from "../UI-Button/button/Button";
import { useState } from "react";
import { useLoginUser } from "../Context/loginContext/useLoginUser";
import { useLoginForm } from "./useLoginForm";

export const LoginUser = () => {
  const { user, pin, setUser, setPin, setClear } = useLoginForm();
  const { login, valid } = useLoginUser();
  const [userName, setUserName] = useState("");
  const accounts = loginUser.map((acc) => acc.account);

  const validateUser = () => {
    accounts.find((account) => {
      if (account.user === user && account.pin === +pin) {
        valid(true);
        setClear();
        return setUserName(account.user);
      }
    });
  };

  const clear = () => {
    if (setClear) {
      setClear();
      valid(false);
    }
  };

  return (
    <form
      className={style.login}
      method="get"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className={classnames(style.loginInput, style.loginInputUser)}
        type="text"
        id="user"
        placeholder="user"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <input
        className={classnames(style.loginInput, style.loginInputPin)}
        type="text"
        id="pin"
        placeholder="pin"
        maxLength="4"
        value={pin}
        onChange={(event) => setPin(event.target.value)}
      />

      <Button
        className={style.loginBtn}
        onClick={validateUser}
        text={login ? userName : "login"}
      />

      <Button className={style.loginBtn} onClick={clear} text="Get out" />
    </form>
  );
};
