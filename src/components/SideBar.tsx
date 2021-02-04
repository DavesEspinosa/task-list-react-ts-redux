import React, { FC } from "react";
import CreateNewList from "./CreateNewList";
import Lists from "./Lists";

const SideBar: FC = () => {
  return (
    <div className="coulmn is-3">
      <CreateNewList />
      <Lists />
    </div>
  );
};

export default SideBar;
