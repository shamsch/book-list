import { useAuthContext } from "../hooks/useAuthContext";


export default function Navbar() {
  const { user,dispatch } = useAuthContext();

  return (
    <>
      <div>
        <h1>Books to read</h1>
        {user?<button onClick={()=>dispatch({type: "SIGN_OUT", payload:null})}>Log out</button>:null}
      </div>
      {user?<h3>Hello, {user.displayName}</h3>:null}
    </>);
}
