import React, { useState } from "react";

const HooksBasics = ({}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // handleChange function to pass to onChange for input
  // this calls the state function (setUserName()) to change the state to the value of the keystrokes
  const handleChange = (event) => {
    console.log("username change values ", event.target.value);
    setUserName(event.target.value);
  };

  const passwordHandleChange = (event) => {
    console.log("password change values ", event.target.value);
    setPassword(event.target.value);
  };

  const togglePassword = (event) => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Hooks Basics</h1>
      <div>
        {/* the input tag needs an onChange={} handler to make it dynamic when using
        state */}
        {/* value should take in the state which is dynamic */}
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={handleChange}
        />
        <br />
        <input
          //   type="password" hides the password value

          type={showPassword ? "text" : "password"}
          placeholder="password"
          value={password}
          onChange={passwordHandleChange}
        />
      </div>
      <div>
        <h2>{userName}</h2>
        {/* if the showPassword is true then we display the password otherwise we display "*" */}
        {/* .repeat() method repeats the "*" string to as many characters of the variable  */}
        <h2>{showPassword ? password : "*".repeat(password.length)}</h2>
        <button onClick={togglePassword}>Show/Hide password</button>
      </div>
    </div>
  );
};

export default HooksBasics;
