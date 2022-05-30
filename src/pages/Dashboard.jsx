import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import {
  Stacked,
  Line,
  Pie,
  Button,
  SparkLine,
  LineChart,
} from "../components";
import { earningData, SparklineAreaData, ecomPieChartDat } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="
          border-1 border-slate-900
          dark:border-amber-500
         dark:bg-main-dark-bg h-44
         rounded-xl w-full lg:w-80 p-8 pt-9 m-3"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold dark:text-slate-100">New Users</p>
              <p className="text-2xl dark:text-amber-400">53,678</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              text="Download Report"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center ">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 text-slate-50 dark:bg-main-dark-bg 
              dark:border-1 dark:border-amber-500 md:w-56 p-4 pt-9 rounded-xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 dark:text-amber-400 mt-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="border-1 border-slate-900 dark:border-amber-500 bg-white dark:text-grey-200 dark:bg-main-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl text-slate-900 dark:text-slate-50">
              Current Growth
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot className="dark:text-amber-500" />
                </span>
                <span className="dark:text-amber-400">Sessions</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot className="dark:text-slate-900" />
                </span>
                <span className="dark:text-amber-400">Expenses</span>
              </p>
            </div>
          </div>
          <div className="mt-5 flex gap-10 flex-wrap">
            <div className="m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
                    17,444
                  </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    47%
                  </span>
                </p>
                <p className="text-gray-500 mt-1  dark:text-amber-400">
                  Monthly Users
                </p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
                    29,979
                  </span>
                </p>
                <p className="text-gray-500 mt-1 dark:text-amber-400">
                  Sessions
                </p>
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="bg-slate-900"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <LineChart width="470px" height="300px" />
            </div>
          </div>
        </div>
        <div>
          <div className="border-1 border-slate-900 dark:border-amber-500 dark:bg-main-dark-bg bg-white rounded-2xl md:w-400 p-4 m-3">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-white text-2xl text-slate-900 dark:text-slate-100">
                Earnings
              </p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8 text-slate-900 dark:text-slate-100">
                  $63,448.78
                </p>
                <p className="text-gray-600 dark:text-amber-500">
                  Monthly revenue
                </p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(214, 249, 221)"
              />
            </div>
          </div>

          <div className="border-1 border-slate-900 bg-white dark:text-gray-200 dark:border-amber-500 dark:bg-main-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                $43,246
              </p>
              <p className="text-gray-600 dark:text-amber-500">Yearly sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
