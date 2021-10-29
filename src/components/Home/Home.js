import React from "react";

import Menu from "./Menu";
import Tasks from "./Tasks";

const Home = () => {
  return (
    <div className="flex z-[15] box b">
      <div className="w-1/5 h-[88vh] border-r-[0.5px] border-gray-400">
        <Menu />
      </div>
      <div className="w-[80%] h-[88vh] pb-10 overflow-y-auto">
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
