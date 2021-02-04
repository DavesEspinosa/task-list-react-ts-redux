import React, { FC } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import DeleteListModal from "./components/DeleteListModal";
import EditListModal from "./components/EditListModal";
import Header from "./components/Header";
import Notification from "./components/Notification";
import SideBar from "./components/SideBar";
import { RootState } from "./store/store";

const App: FC = () => {
  const notificationMsg = useSelector(
    (state: RootState) => state.notification.message
  );

  const listIdToDelete = useSelector(
    (state: RootState) => state.list.listIdToDelete
  );

  const listToEdit = useSelector((state: RootState) => state.list.listToEdit);

  return (
    <div className="App">
      <Header
        title="Task List App"
        subtitle="Create some lists and add somes tasks to each list"
      />
      <div className="container px-5">
        <div className="columns">
          <SideBar />
        </div>
      </div>
      <Notification msg={notificationMsg} />
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
      {listToEdit && <EditListModal list={listToEdit} />}
    </div>
  );
};

export default App;
