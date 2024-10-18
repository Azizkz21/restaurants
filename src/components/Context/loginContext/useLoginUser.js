import { useContext } from "react";
import { UserContext } from ".";

export const useLoginUser = () => useContext(UserContext);
