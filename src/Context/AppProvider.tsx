import { useState } from "react"
import { AppContext } from "./AppContext"

interface props {
    children:JSX.Element | JSX.Element[]
}

export const AppProvider = ({children}:props) => {
  const [userInfo, setUserInfo] = useState<string>("");
  
  return (
        <AppContext.Provider value={{userInfo, setUserInfo}}>
            { children }
        </AppContext.Provider>
  )
}
