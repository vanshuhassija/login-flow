import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("login-token")){
      navigate("/users");
    }
  },[])
 

  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function loginUser() {
    if (!username || !password) {
      setError("All the fields are required.");
    }
    // else {
    //   setError("");
    //   const matchingUser = users.find((user) => {
    //     return user.username === username;
    //   });
    //   if (!matchingUser) {
    //     setError("No user Exists");
    //   } else {
    //     const passwordsMatch = matchingUser.password === password;
    //     if (!passwordsMatch) {
    //       setError("Invalid credentials");
    //     }
    //     else{
    //       alert("Show Users");
    //     }
    //   }
    // }
    else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var body = JSON.stringify({
          "username": username,
          "password": password
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: body,
        };
        
        fetch("https://fakestoreapi.com/auth/login", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log("Result is",result)
            if(result.token){
              localStorage.setItem("login-token",result.token);
              navigate("/users");
            }
            else{
              setError("Invalid credentials")
            }
          })
          .catch(error => {
            setError("Invalid Credentials")
          });
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        onChange={handleUsername}
        value={username}
        placeholder="Username"
      />
      <input
        onChange={handlePassword}
        value={password}
        style={{ marginTop: 20 }}
        type="password"
        placeholder="Password"
      />
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      <button onClick={loginUser} style={{ marginTop: 20 }}>
        Login
      </button>
    </div>
  );
}

export default Login;
