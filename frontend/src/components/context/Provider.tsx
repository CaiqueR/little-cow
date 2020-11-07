import React, { createContext, useContext, useState } from "react";
import usePersistedState from "../../hooks/usePersistedState";
import { Dialog } from "./styles";
interface User {
  nome?: string;
  email?: string;
  bitcows?: number;
  dataCadastro?: string;
  isLogged?: boolean;
}

interface Dialog {
  show: boolean;
  title?: string;
  content?: React.ReactNode;
}
export type GeneralContextType = {
  user: User;
  setUser: (user: User) => void;
  showHeader: boolean;
  setShowHeader: (headerBool: boolean) => void;
  showDialog: Dialog;
  setShowDialog: (headerBool: Dialog) => void;
};
const GeneralContext = createContext<GeneralContextType>({
  user: {
    nome: "",
    email: "",
    bitcows: 0,
    dataCadastro: "",
    isLogged: false,
  },
  setUser: (theme) => console.warn("No setuser provided"),
  showHeader: true,
  setShowHeader: (theme) => console.warn("no setHeader Provided"),
  showDialog: { show: false },
  setShowDialog: (theme) => console.warn("no setHeader Provided"),
});

export const useGeneral = () => useContext(GeneralContext);

const Provider: React.FC = ({ children }) => {
  const [user, setUser] = usePersistedState<User>("user", {});
  const [showHeader, setShowHeader] = useState(true);
  const [showDialog, setShowDialog] = useState<Dialog>({
    show: false,
    content: null,
  });

  return (
    <GeneralContext.Provider
      value={{
        user,
        setUser,
        showHeader,
        setShowHeader,
        showDialog,
        setShowDialog,
      }}
    >
      {children}

      <Dialog className={showDialog.show && "dialog-open"}>
        <div className={`content ${showDialog.show && "dialog-open"}`}>
          <div className="header">
            <h1>{showDialog?.title}</h1>
            <span
              onClick={() => setShowDialog({ ...showDialog, show: false })}
            />
          </div>
          {showDialog?.content}
        </div>
      </Dialog>
    </GeneralContext.Provider>
  );
};

export default Provider;
