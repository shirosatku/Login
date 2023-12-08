import './App.css';
import React, { useState } from "react";

function App() {
  // Variables:
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isWrongDetails, setIsWrongDetails] = useState(false);

  // Handle login logic
  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the entered password matches the dummy password
    if (password === "password" && username === "bob@bob.co")  {
      setIsLoggedIn(true);
    } 
    else {
      setIsWrongDetails(true);
    }
  };

  // Handle logout
  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("")
    setPassword("")
  }

  // Handle WrongDetails
  function handleWrongDetails() {
    setIsWrongDetails(false);
    setUsername("")
    setPassword("")
  }

  return (
    <div className="WholePage">
      {(isLoggedIn) ? (
        // Render WelcomeMessage if user is logged in
        <div className= "WelcomeMessage">
          <p>Welcome {username}! You are logged in.</p>
          <button onClick = {handleLogout}> Logout</button>
        </div>
        ) : (
          <>
          {(isWrongDetails) ? (
            <div className= "ErrorMessage">
              <p>Sorry, we don't recognise those details. Please try again.</p>
              <button onClick = {handleWrongDetails}> Try again</button>
            </div>
          ) : ( 
            <form onSubmit={handleLogin}>
              <div>
                <label>Username:</label>
                <input type='email' name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <input type='submit' value='Login'/>
              </div>
            </form>
             )
          }
        </>
        )
      }
      
    </div>
  );
};

export default App;