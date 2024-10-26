import style from "./loginUser.module.css";
import { Button } from "../UI-Button/button/Button";
import { useLoginUser } from "../Context/loginContext/useLoginUser";

export const LoginUser = () => {
  const { login, valid } = useLoginUser();
  const { isAuthorized, userName } = login;

  return (
    <>
      <Button
        className={style.loginBtn}
        onClick={valid}
        text={isAuthorized ? `${userName}. GET OUT` : "login"}
      />
    </>
  );
};
