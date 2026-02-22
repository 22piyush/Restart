import { createContext, useContext } from "react";

const MyContext = createContext();

const useMyContext = () => {
  return useContext(MyContext);
};

const MyContextProvider = ({children}) => {
  return (
    <MyContext.Provider value={"Piyush"}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, useMyContext };
