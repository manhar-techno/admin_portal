import React from "react";
import { useContext } from "react";
import { ContextRegistration } from "../App.js";

export default function RegisterPageTwo() {
  const { state, dispatch } = useContext(ContextRegistration);

  return (
    <div className="form">
      <div>
        <h3>Email</h3>
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={(e) => {
            dispatch({
              type: "set",
              name: e.target.name,
              value: e.target.value,
            });
          }}
        />
        <h3>Country</h3>
        <input
          type="text"
          value={state.country}
          name="country"
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
        <button className="button-home">Next</button>
      </div>
    </div>
  );
}
