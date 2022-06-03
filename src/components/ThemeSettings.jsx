import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setMode, currentMode, setThemeSettings } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-main-dark-bg dark:bg-amber-400 bg-white w-400">
        <div className="flex justify-between items-center p-4 ml-4 ">
          <p className="font-semibold text-lg">Theme Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "%50" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full transition-all dark:hover:text-amber-400 hover:dark:bg-main-dark-bg"
          >
            <MdOutlineCancel className="" />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light ☀
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark 🌙
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
