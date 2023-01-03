import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [currentForm, setcurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setcurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Signup onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
