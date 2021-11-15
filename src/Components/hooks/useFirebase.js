import { useEffect, useState } from "react";
import firebaseAuthInit from "../Authentication/Firebase/firebase.auth.init";
import { getAuth, createUserWithEmailAndPassword , updateProfile , onAuthStateChanged ,signOut , signInWithEmailAndPassword} from "firebase/auth";

firebaseAuthInit();

const useFirebase = () =>{
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true);

    const auth = getAuth();

    //create new user
    const registerWithEmail = (name , email , pass , location , history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth , email , pass)
        .then( (result) => {
            setUser(result.user)

            updateProfile(auth.currentUser, {
                displayName: name
            })

            const redirecturl = location?.state?.from || '/';
            history.replace(redirecturl);

        }).catch( (error) => {
            console.log(error.message);
        }).finally(
            () => {
                setIsLoading(false)
            }
        )
        // console.log(user);
    }

    //login with email
    const loginWithEmail = (email , pass , location , history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth , email , pass)
        .then(
            (result) => {
                setUser(result.user)
                const redirectUrl = location?.state?.from || '/';
                history.replace(redirectUrl);
            }
        ).catch((error) => {
          console.log(error);
        }).finally( () => {
            setIsLoading(false)
        })
    }

    //observer
    useEffect( () => {
        setIsLoading(true)
        onAuthStateChanged( auth , (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
    } , [auth])


    //logout 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
        }).catch((error) => {
            console.log(error);
        }).finally(
            () => {
                setIsLoading(false)
            }
        )
    }

    return{
        user,
        registerWithEmail,
        logOut,
        loginWithEmail,
        isLoading
    }

}

export default useFirebase;