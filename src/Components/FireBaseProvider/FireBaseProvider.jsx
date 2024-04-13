import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword, signOut,
  updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../FireBase.config";

export const AuthContex = createContext(null);

// eslint-disable-next-line react/prop-types
const FireBaseProvider = ({ children }) => {
  const [reload,setReload] = useState(false)
  const [user, setUser] = useState(null);
  


  // Create User Function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User Function
  const loginUser = (email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
  }

  const logOutUser= ()=>{
  return  signOut(auth)
    
  }

  // Ovserber sideEffect
  useEffect(() => {
    
    const unSubcribe =  onAuthStateChanged(auth, (currentUser) => {
  
        setUser(currentUser);
    
    });
    return (()=>{
      unSubcribe()
    })
  }, [reload]);

const UserUpdateProfile =(name,image)=>{
  return updateProfile(auth.currentUser, {
    displayName: name, photoURL: image
  })
}
  const authInfo = {
    createUser,
    loginUser,
    user,
    logOutUser,
    UserUpdateProfile,
    setReload
  };

  return <AuthContex.Provider value={authInfo}>
    {children}
    </AuthContex.Provider>;
};

export default FireBaseProvider;
