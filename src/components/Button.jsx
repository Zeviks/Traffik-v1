import React from "react";

const Button = ({ color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ color, borderRadius }}
      className={`bg-main-dark-bg hover:dark:bg-amber-400 hover:bg-green-200 hover:text-slate-900 transition-all text-${size} p-3 hover:drop-shadow-xl dark:outline dark:outline-1 dark:outline-amber-500 `}
    >
      {text}
    </button>
  );
};

export default Button;
