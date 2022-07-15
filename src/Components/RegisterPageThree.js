import React from "react";
import { useContext } from "react";
import { ContextRegistration } from "../App.js";

export default function RegisterPageThree() {
  const { state, dispatch } = useContext(ContextRegistration);

  return (
    <div className="form">
      <div>
        <h3>Age</h3>
        <input
          type="text"
          value={state.age}
          name="age"
          onChange={(e) => {
            dispatch({
              type: "set",
              name: e.target.name,
              value: e.target.value,
            });
          }}
        />
        <h3>Password</h3>
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={(e) => {
            dispatch({
              type: "set",
              name: e.target.name,
              value: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button className="button-home">Save</button>
        <button className="button-home">Submit</button>
      </div>
    </div>
  );
}
