import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Chat from "./components/chat/Chat";
import Login from "./components/logIn/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route exact path="/" element = {<Chat/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

