import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { List } from "../store/types";
import { addList, setNotification } from "./../store/actions";

//!This component will be used to add new list and save it to local storage. This one is also functional component. Since the component has a form we can import FormEvent interface from react and useState to manage state of the input field. We will also dispatch some actions so we need to bring in useDispatch hook from react-redux package. We will use addList and setNotification actions so we need to import them as well. And we also need List type from our types file. This component will output simple form and when the form is submitted we can do some simple validation and if validation does not fail we can create new list and dispatch addList action and setNotification action and reset the input field value.

const CreateNewList: FC = () => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState("");

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (listName.trim() === "") {
      return alert("List name is required");
    }
    const newList: List = {
      id: `list-${new Date().getTime()}`,
      name: listName,
      tasks: [],
    };

    dispatch(addList(newList));
    dispatch(setNotification(`New List(${newList.name}) created!`))
    setListName("");
  };
  return (
    <div className="card mb-5">
      <div className="card-header">
        <p className="card-header-title">Create New List</p>
      </div>
      <div className="card-content">
        <form onSubmit={submitHandler}>
          <div className="field">
            <label className="label">List Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="List Name"
                name="listName"
                value={listName}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewList;
