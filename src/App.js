import "./Assets/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NoMatch from "./Components/NoMatch";
import { useReducer } from "react";
import RegisterPages from "./RegisterPages.js";

export const ContextRegistration = React.createContext();

function App() {
  const initialValue = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    confirmPassword: "",
    password: "",
    type: "",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "set": {
        const { name, value } = action;
        return { ...state, [name]: value };
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <ContextRegistration.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rpg:id" element={<RegisterPages />} />
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </ContextRegistration.Provider>
    </div>
  );
}

export default App;
