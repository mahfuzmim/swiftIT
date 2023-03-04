
import { createContext, useState } from "react";
import Comp1 from "./components/Comp1";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Mim")

  return (
    <UserContext.Provider className="App" value={user}>
     <Comp1 user={user1}/>
    </UserContext.Provider>
  );
}

export default App;
