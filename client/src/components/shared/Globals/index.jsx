import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const GlobalStoreContext = createContext();

const GlobalStoreProvider = ({children}) => {
  const [globalStore, setGlobalStore] = useState({});

  useEffect(() => {
    let REACT_APP_ENDPOINT, REACT_APP_SOCKET;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      REACT_APP_ENDPOINT = "http://localhost:4000";
    } else {
      REACT_APP_ENDPOINT = "https://comp-2068-quote-example.herokuapp.com";
    }
    setGlobalStore({ REACT_APP_ENDPOINT, REACT_APP_SOCKET });
  }, []);

  return (
    <GlobalStoreContext.Provider value={{ globalStore, setGlobalStore }}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export default GlobalStoreProvider;