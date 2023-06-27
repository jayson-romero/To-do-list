import { createContext } from "react";
import { useLocalStorage } from "./LocalStorage";
import axios from "axios";

const BASE_URL = 'https://mysql-database-uvhm.onrender.com/api/users';
// const BASE_URL = 'http://localhost:3001/api/users';
// Create the APIContext
const APIContext = createContext();

const APIProvider = ({children}) => {

  const { saveToken, removeToken} = useLocalStorage()

    // Function to handle registration
   const register = async (userData) => {
      try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response.data;
      } catch (error) {
        throw error.response.data
      }
    };

     // Function to handle login
   const login = async (credentials) => {
      try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      console.log(response)
      saveToken(response.data)
      } catch (error) {
       throw error.response.data
      }
    };

    // Function to handle logout
   const logout = async () => {
   try {
      await axios.post(`${BASE_URL}/logout`);
      removeToken()
      } catch (error) {
      throw new Error('Failed to logout. Please try again.');
      }
   };

    // Provide the APIContext values to children components
  return (
   <APIContext.Provider value={{ register, login, logout }}>
     {children}
   </APIContext.Provider>
 );

}

export { APIContext, APIProvider };

