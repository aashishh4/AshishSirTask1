import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./Contextlogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState(""); // Added useState for email
  const [password, setPassword] = useState(""); // Added useState for password
  const { Login,isAuth } = useAuth();

  function handleSubmit(e) {
    Login();
    e.preventDefault();

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password
      })
      .then((result) => {
      console.log("result",result)
        Navigate("/home");
        alert(result.data.token)
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(email, password);
  }
  useEffect(()=>{
   if( isAuth){
    Navigate('/home')
   }
  },[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
