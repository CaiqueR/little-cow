/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

import usePersistedState from "../../hooks/usePersistedState";

interface User {
  nome?: string;
  email?: string;
  bitCows?: number;
  dataCadastro?: string;
  isLogged?: boolean;
}

export type GeneralContextType = {
  user: User;
  setUser: (user: User) => void;
  showHeader: boolean;
  setShowHeader: (headerBool: boolean) => void;
};
const GeneralContext = createContext<GeneralContextType>({
  user: {
    nome: "",
    email: "",
    bitCows: 0,
    dataCadastro: "",
    isLogged: false,
  },
  setUser: (theme) => console.warn("No setuser provided"),
  showHeader: true,
  setShowHeader: (theme) => console.warn("no setHeader Provided"),
});

export const useGeneral = () => useContext(GeneralContext);

const Provider: React.FC = ({ children }) => {
  const [user, setUser] = usePersistedState<User>("user", {});
  const [showHeader, setShowHeader] = useState(true);

  return (
    <GeneralContext.Provider
      value={{
        user,
        setUser,
        showHeader,
        setShowHeader,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default Provider;
