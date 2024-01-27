import {useRef,useState} from "react";
import "./signup.css";
import { useAuth } from "../Context/AuthProvider";  //usecontext

const SignUp = () => {

  // useref data of email and password
  const emialRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

// context
const authctx = useAuth();
console.log(authctx);

// usestate
const [error,setError] = useState(false);

// handleSubmit
const handleSubmit = async(e)=>{
    e.preventDefault();
    setError(false);
    if(passwordRef.current.value != passwordConfirmRef.current.value){
      setError(true)
      return;
    }
    try{
      const response = await authctx.signUp(emialRef.current.value,passwordRef.current.value);
      console.log(response);
      alert("Registration Successful,Please Login to continue")
    }catch(err){
      console.log(err);
    }
    
}

  return (
    <div className="register-container">
      <h1>Sign Up</h1>
      {error && <div>Password and Confirm Password do not match</div>}
      <br />
      <form action="" onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input type="email" ref={emialRef}/>
        <br />
        <label>Password</label>
        <br />
        <input type="password" ref={passwordRef}/>
        <br />
        <label htmlFor="">Password Confirmation</label>
        <br />
        <input type="password" ref={passwordConfirmRef}/>
        <br />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
