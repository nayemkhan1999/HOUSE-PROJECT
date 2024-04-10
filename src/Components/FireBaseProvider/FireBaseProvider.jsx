import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../FireBase.config";

export const AuthContex = createContext(null);

// eslint-disable-next-line react/prop-types
const FireBaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);


  // Create User Function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User Function
  const loginUser = (email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
  }

  // Ovserber sideEffect
  useEffect(() => {
    
    const unSubcribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        
        
      }
    });
    return (()=>{
      unSubcribe()
    })
  }, []);


  const authInfo = {
    createUser,
    loginUser,
    user
  };

  return <AuthContex.Provider value={authInfo}>
    {children}
    </AuthContex.Provider>;
};

export default FireBaseProvider;
