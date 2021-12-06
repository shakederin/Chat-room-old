import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { createContext } from "react";
import Chat from "./components/chat/Chat";
import Login from "./components/logIn/Login";

export const user = createContext()

function App() {
  const[userName, setUserName]= useState(null)
  const[allUsers, setAllUsers]= useState(null)
  return (
    <user.Provider value={{userName, setUserName, allUsers, setAllUsers}}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUserName={setUserName}/>}/>
          <Route exact path="/chat" element = {<Chat userName={userName}/>}/>
        </Routes>
      </BrowserRouter>
    </user.Provider>

  );
}

export default App;

