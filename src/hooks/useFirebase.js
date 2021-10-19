import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from '@firebase/auth';
import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.int';


firebaseInitialization();


const useFirebase= () => {
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(true);

         //Google sign in
         const handleGoogleSignIn = () => {
            setIsLoding(true);
            const Googleprovider = new GoogleAuthProvider();
            signInWithPopup(auth, Googleprovider)
            .then(result => {
                setUser(result.user);
            })
            .finally(()=> setIsLoding(false));
    }

         // Email sign in
            function signInWithEmail(e) {
                e.preventDefault();
                return signInWithEmailAndPassword(auth, email, password);
            }
            
        //userEmail
            function getEmail (e){
                setEmail(e.target.value);
            }
        //userPassword
            function getPassword (e){
                setPassword(e.target.value);
            }

            //logOut
            const logOut = () => {
                setIsLoding(true);
                signOut(auth)
                .then(() => {
                 setUser({})
                });
            }
            
            //observe user state change
            useEffect( ()=>{
            const unsubscribed = onAuthStateChanged(auth, user => {
                if(user){
                    setUser(user);
                }
                else{
                    setUser({});
                }
                setIsLoding(false)
            });
            return () => unsubscribed;
        },[]);

          
    return {
        getPassword,
        getEmail,
        signInWithEmail,
        error,
        setUser,
        setEmail,
        setError,
        user,
        handleGoogleSignIn,
        password,
        email,
        auth,
        logOut,
        isLoding,
        setIsLoding

    };
}

export default useFirebase;