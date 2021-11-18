import { useEffect, useState } from "react";
import firebaseAuthInit from "../Authentication/Firebase/firebase.auth.init";
import { getAuth, createUserWithEmailAndPassword , updateProfile , onAuthStateChanged ,signOut , signInWithEmailAndPassword} from "firebase/auth";
import axios from "axios";


firebaseAuthInit();

const useFirebase = () =>{
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true);
    const [isAdmin , setIsAdmin] = useState(false);

    const auth = getAuth();

    //create new user
    const registerWithEmail = (name , email , pass , location , history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth , email , pass)
        .then( (result) => {

            updateProfile(auth.currentUser, {
                displayName: name
            })
            
            setUser(result.user)

            //inser mongodb
            insetUserToDB( result.user.email );

            const redirecturl = location?.state?.from || '/';
            history.push(redirecturl);


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
    const logOut = (history) => {
        setIsLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
            setIsAdmin(false)
            history?.replace('/');

        }).catch((error) => {
            console.log(error);
        }).finally(
            () => {
                setIsLoading(false)
            }
        )
    }

    //inset register user to mongodb
    const insetUserToDB = ( email  ) => {
        const user ={
            email,
            role: false,
        }
        axios.post('https://immense-thicket-11021.herokuapp.com/user',{user})
        .then( result => {
            console.log(result)
        })
    }

    //get all users and find current user
    useEffect( () => {
        axios.get('https://immense-thicket-11021.herokuapp.com/users')
        .then( res => {
            const users = res.data;
            const currentUser = users?.find( cUser => cUser.email === user.email );
            if(currentUser?.role){
                setIsAdmin(true);
            }

        })
    } ,[user])

    return{
        user,
        registerWithEmail,
        logOut,
        loginWithEmail,
        isLoading,
        isAdmin
    }

}

export default useFirebase;