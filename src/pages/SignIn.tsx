import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { auth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";


const SignIn = () => {
    const {dispatch}=useAuthContext();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((response)=>{
            dispatch({type: 'SIGN_IN', payload: response.user})
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </>
    )
}
export default SignIn
