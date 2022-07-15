import React from "react";

export default function useSave(state) {
  sessionStorage.setItem(state.id, state);
  return <div></div>;
}
