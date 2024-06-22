import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) =>{
    
  const [consulta,setConsulta] = useState('');

    return(
        <GlobalContext.Provider value={{consulta,setConsulta}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider