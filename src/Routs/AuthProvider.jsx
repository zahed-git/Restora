import { createContext, useEffect, useState } from "react";
import auth from '../firebase.init'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider =new GoogleAuthProvider()
    const gitProvider =new GithubAuthProvider()

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLog = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLog = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = { creatUser, singInUser, googleLog, gitHubLog, logOut, user, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;