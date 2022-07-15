import React from "react";
import { useParams } from "react-router";
import RegisterPageOne from "./Components/RegisterPageOne";
import RegisterPageTwo from "./Components/RegisterPageTwo.js";
import RegisterPageThree from "./Components/RegisterPageThree.js";
import NoMatch from "./Components/NoMatch";

export default function RegisterPages() {
  const params = useParams();
  const userId = params.id;
  switch (userId) {
    case "1":
      return <RegisterPageOne />;
    case "2":
      return <RegisterPageTwo />;
    case "3":
      return <RegisterPageThree />;
    default:
      return <NoMatch />;
  }
}
