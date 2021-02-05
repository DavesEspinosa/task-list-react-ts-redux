import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Task, List } from '../store/types';
import { unsetTaskToDelete, deleteTask, setNotification } from '../store/actions';

//!This component is used to delete the task. When delete button is clicked deleteTask action is dispatched, we need to pass task and list as arguments and we can get those from the component props(we set them to taskToDelete property when we clicked delete button), and the task is removed from the list and updated list saved to local storage. setNotification action is also dispatched when delete button is clicked.And to hide the modal we need to dispatch unsetTaskToDelete action which will set taskToDelete to null.

interface DeleteTaskModalProps {
  taskToDelete: {
    task: Task;
    list: List;
  }
}

const DeleteTaskModal: FC<DeleteTaskModalProps> = ({ taskToDelete: { task, list }}) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(unsetTaskToDelete());
  }

  const deleteHandler = () => {
    dispatch(deleteTask(task, list));
    dispatch(setNotification(`Task "${task.name}" deleted!`, 'danger'));
  }

  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModalHandler}></div>
      <div className="modal-card">
        <header className="modal-card-head has-text-centered">
          <p className="modal-card-title">Are you sure you want to delete this task ?</p>
        </header>
        <footer className="modal-card-foot">
          <button type="submit" className="button is-danger" onClick={deleteHandler}>Delete</button>
          <button type="button" className="button" onClick={closeModalHandler}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default DeleteTaskModal;
