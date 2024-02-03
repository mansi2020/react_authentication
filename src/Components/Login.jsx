import { useRef, useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  // useref data of email and password----------------------------------
  const emialRef = useRef();
  const passwordRef = useRef();

  // context---------------------------------------------
  const authctx = useAuth();
  console.log(authctx);

  // usestate---------------------------------------------------
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // handleSubmit---------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        const currentUser = await authctx.login(
          emialRef.current.value,
          passwordRef.current.value
        );
        alert("Successfully logged in")
        authctx.setCurrentUser(currentUser);
      } catch (err) {
        console.log(err);
        alert("Create a New Account")
      }
      setLoading(false);
    }, 2000);
  };

  return (
   
      <div className="register-container">
        <h1>Log In</h1>
        {error && <div>Password and Confirm Password do not match</div>}
        <br />
        <form action="" onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input type="email" ref={emialRef} />
          <br />
          <label>Password</label>
          <br />
          <input type="password" ref={passwordRef} />
          <br />
          <br />
          <button disabled={loading}>Log In</button>
        </form>
        <p style={{marginTop: "20px"}}>
        Need an Account <Link to="/signup">Sign Up</Link>{" "}
      </p>
      </div>
      
   
  );
};

export default Login;
