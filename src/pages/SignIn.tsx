import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { auth } from "../firebase/config";


const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
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
