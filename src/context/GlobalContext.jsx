import { createContext } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({children}) =>{
    
  const [consulta,setConsulta] = useState('');

    return(
        <GlobalContext.Provider value={{consulta,setConsulta}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider