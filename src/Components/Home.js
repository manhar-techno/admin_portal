import React from "react";
import { useNavigate } from "react-router";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-background">
      <h1>Welcome</h1>
      <h4 className="heading-follow">Admin Portal</h4>
      <div className="buttons">
        <button className="button-home">Login</button>
        <button
          className="button-home"
          onClick={() => {
            navigate("rpg1");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
