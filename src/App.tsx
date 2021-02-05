import React, { FC } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import DeleteListModal from "./components/DeleteListModal";
import EditListModal from "./components/EditListModal";
import EditTaskModal from "./components/EditTaskModal";
import DeleteTaskModal from "./components/DeleteTaskModal";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Notification from "./components/Notification";
import SideBar from "./components/SideBar";
import { RootState } from "./store/store";

//!If you add new list this list should be saved to local storage, added to Your lists section and to select field as an option. You will also see a notification when the list is added. And if you click on this list edit list modal will open and there you can update the list name. And if you click remove button next to list name delete list modal will open and in here you can click delete button to delete the list and remove it from local storage.

const App: FC = () => {
  const notificationMsg = useSelector(
    (state: RootState) => state.notification.message
  );

  const listIdToDelete = useSelector(
    (state: RootState) => state.list.listIdToDelete
  );

  const listToEdit = useSelector((state: RootState) => state.list.listToEdit);
  const taskToEdit = useSelector((state: RootState) => state.list.taskToEdit);
  const taskToDelete = useSelector(
    (state: RootState) => state.list.taskToDelete
  );

  return (
    <div className="App">
      <Header
        title="Task List App"
        subtitle="Create some lists and add somes tasks to each list"
      />
      <div className="container px-5">
        <div className="columns">
          <SideBar />
          <MainContent />
        </div>
      </div>
      <Notification msg={notificationMsg} />
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
      {listToEdit && <EditListModal list={listToEdit} />}
      {taskToEdit && <EditTaskModal taskToEdit={taskToEdit} />}
      {taskToDelete && <DeleteTaskModal taskToDelete={taskToDelete} />}
    </div>
  );
};

export default App;
