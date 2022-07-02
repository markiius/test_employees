import {createContext} from "react";

interface Context {
  userInfo: string;
  setUserInfo: (user: string) => void;
}

export const AppContext = createContext<Context>({
  userInfo: "",
  setUserInfo: (user: string) =>
  console.log("funciona"),
});