import React from "react";

import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-4 mD:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Full Screen Chart" title="Line Chart" />
      <div className="w-full">
        <div className="w-full">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Line;
