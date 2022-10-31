import React, { createContext, useState } from "react";

export const userContext = createContext(null);

const Context = ({children}) => {
  const [user, setUser] = useState("");
  return (
    <userContext.Provider value={{ user, setUser }}>
        {children}
    </userContext.Provider>
  );
};

export default Context;
