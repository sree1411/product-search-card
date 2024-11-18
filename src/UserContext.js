import { createContext, useContext, useState } from "react";

 const UserContext = createContext()

 export const UserProvider = ({children})=>{

 const [searchQuery, setSearchQuery] = useState("")


  return (
      <UserContext.Provider value={{searchQuery, setSearchQuery}}>
         {children}
      </UserContext.Provider>
  )
 }

 export const UserData = ()=>useContext(UserContext)