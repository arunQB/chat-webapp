import { createContext, useContext , useEffect, useState} from 'react';
import { signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../firebase';


// create context

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null);
   const [ loading, setLoading ] = useState(true);
   //console.log(currentUser);
   //sign in with google
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }
 
  // sign out 
  const logout = () => signOut(auth);


   const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle,
    logout
   }

   // set current user
   useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
       });

       return unsubscribe;

   }, []);
    return (<AuthContext.Provider value={value}>
        { !loading && children }
    </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
