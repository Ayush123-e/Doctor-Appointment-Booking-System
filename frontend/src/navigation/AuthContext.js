import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const authContextValue = {
    userToken,
    signIn: () => {
      console.log("Signing in...");
      setUserToken('fake-token'); 
    },
    signOut: () => {
      console.log("Signing out...");
      setUserToken(null); 
    },
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};