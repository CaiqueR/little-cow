import React, { createContext, useContext, useState } from "react";

interface User {
  name: string;
  isLogged: boolean;
}
export type GeneralContextType = {
  user: User;
  setUser: (user: User) => void;
  showHeader: boolean;
  setShowHeader: (headerBool: boolean) => void;
};
const GeneralContext = createContext<GeneralContextType>({
  user: { name: "", isLogged: false },
  setUser: (theme) => console.warn("No setuser provided"),
  showHeader: true,
  setShowHeader: (theme) => console.warn("no setHeader Provided"),
});

export const useGeneral = () => useContext(GeneralContext);

const Provider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({ name: "", isLogged: false });
  const [showHeader, setShowHeader] = useState(true);

  return (
    <GeneralContext.Provider
      value={{ user, setUser, showHeader, setShowHeader }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default Provider;
