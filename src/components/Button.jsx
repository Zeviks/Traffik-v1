import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ icon, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => setIsClicked(!initialState)}
      style={{ borderRadius }}
      className={`bg-main-dark-bg hover:dark:bg-amber-400 hover:bg-green-200 transition-all text-${size} p-3 hover:drop-shadow-xl dark:outline dark:outline-1 dark:outline-amber-500 text-white hover:text-slate-900 dark:hover:text-slate-900 `}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
