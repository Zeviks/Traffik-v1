import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Navbar, Sidebar, ThemeSettings } from "../components";
import {
  Dashboard,
  Calendar,
  Employees,
  Wordpad,
  Invoice,
  Mail,
  Line,
  Login,
  SignUp,
  Profile,
} from "../pages";

import { useStateContext } from "../contexts/ContextProvider";

const Main = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentMode } =
    useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Dark Mode" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white bg-main-dark-bg transition-all hover:bg-green-300 hover:text-slate-900 dark:hover:bg-amber-400"
                style={{ borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                {currentMode === "Dark" ? (
                  <BsFillMoonFill />
                ) : (
                  <BsFillSunFill />
                )}
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div
              className={
                "fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"
              }
            >
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />

                {/* Pages */}
                <Route path="/employees" element={<Employees />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/wordpad" element={<Wordpad />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/mail" element={<Mail />} />

                {/* Chart */}
                <Route path="/line" element={<Line />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Main;
