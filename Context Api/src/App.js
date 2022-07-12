import React, { createContext, useState } from "react";
import Child from "./Child";
import Grandchild from "./Grandchild";

export  const AppCon = createContext(null);

const App = () => {
 
  const [name, setName] = useState("Tshisi");
  
  return (
    <div>
      <AppCon.Provider value={{name ,setName}}>
        <Child />
        <Grandchild />
      </AppCon.Provider>
    </div>
  )
}

export default App