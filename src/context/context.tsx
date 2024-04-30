import React, { createContext, useState } from "react";

type props = {
  children?: React.ReactNode;
};
export type userProps = {
  user: string | undefined;
  password: string | undefined;
} | null;

interface ContextState {
  auth: userProps;
  doSignIn: (userName: string, password: string) => void;
  doSignOut: () => void;
}

export const Context = createContext<ContextState | undefined>(undefined);
function ContextProvider({ children }: props) {
  const [user, setUser] = useState<userProps>(null);

  function doSignIn(userName: string, password: string) {
    setUser({ user: userName, password: password });
  }
  function doSignOut() {
    setUser(null);
  }
  const contextValue: ContextState = {
    auth: user,
    doSignIn,
    doSignOut,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider;
