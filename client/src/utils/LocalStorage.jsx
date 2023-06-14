


import { createContext, useState, useContext, useEffect } from "react";

const LocalStorageContext = createContext();

const LocalStorageProvider = ({children}) => {
   const [token, setToken] = useState( JSON.parse(localStorage.getItem("auth_token")) || null);

 

    // Save the token to local storage
    const saveToken = (newToken) => {
      try {
        setToken(newToken);
      } catch (error) {
        console.log("problob with saving Token")
      }
   
    };
  
    // Remove the token from local storage
    const removeToken = () => {
      localStorage.removeItem('auth_token');
      setToken(null);
    };

    // Load token from local storage on component mount
      useEffect(() => {
        localStorage.setItem('auth_token', JSON.stringify(token));
      
      }, [token]) 

    return (
      <LocalStorageContext.Provider value={{ token, saveToken, removeToken }}>
        {children}
      </LocalStorageContext.Provider>
    ); 
}

// Custom hook to access the LocalStorageContext values
const useLocalStorage = () => {
   return useContext(LocalStorageContext);
 };

export { useLocalStorage, LocalStorageProvider };