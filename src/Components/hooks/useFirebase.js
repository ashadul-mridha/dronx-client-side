import { useEffect, useState } from "react";
import firebaseAuthInit from "../Authentication/Firebase/firebase.auth.init";
import { getAuth, createUserWithEmailAndPassword , updateProfile , onAuthStateChanged ,signOut , signInWithEmailAndPassword} from "firebase/auth";

firebaseAuthInit();

const useFirebase = () =>{
    const [user , setUser] = useState({});

    const auth = getAuth();

    //create new user
    const registerWithEmail = (name , email , pass) => {
        createUserWithEmailAndPassword(auth , email , pass)
        .then( (result) => {
            setUser(result.user)

            updateProfile(auth.currentUser, {
                displayName: name
            })

        }).catch( (error) => {
            console.log(error.message);
        })
        // console.log(user);
    }

    //login with email
    const loginWithEmail = (email , pass) => {
        signInWithEmailAndPassword(auth , email , pass)
        .then(
            (result) => {
                setUser(result.user)
            }
        ).catch((error) => {
          console.log(error);
        });
    }

    //observer
    useEffect( () => {
        onAuthStateChanged( auth , (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
    } , [auth])


    //logout 
    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser({})
        }).catch((error) => {
            console.log(error);
        });
    }

    return{
        user,
        registerWithEmail,
        logOut,
        loginWithEmail
    }

}

export default useFirebase;