import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { List } from "../store/types";
import { getLists, setListIdToDelete, setListToEdit } from "./../store/actions";

//!This component will list all of our lists from local storage. First we will use useSelector hook to bring the lists from our list state, as you can see we need to use RooState type in here, this way typescript knows that we want to get lists from our list reducer. When the component is mounted we will use useEffect hook to dispatch getLists action to get all lists from local storage. If there are no lists we will output No lists text otherwise we will output each list in a bulma panel-block. When we click list name we want to set the list we want to edit to listToEdit property so we will dispatch setListToEdit action. And when we click delete button we want to set list id we want to delete to listIdToDelete property so we need to dispatch setListIdToDelete action.

const Lists: FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.list.lists);

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);

  const setListToEditHandler = (id: string) => {
    dispatch(setListToEdit(id));
  };

  const setListIdToDeleteHandler = (id: string) => {
    dispatch(setListIdToDelete(id));
  };

  return (
    <div className="panel is-primary">
      <p className="panel-heading">Your lists</p>
      <div>
        {Object.keys(lists).length === 0 ? (
          <p className="py-4 has-text-centered">No Lists</p>
        ) : (
          <div>
            {Object.values(lists).map((list: List) => {
              return (
                <div className="panel-block py-3" key={list.id}>
                  <p onClick={() => setListToEditHandler(list.id)}>
                    {list.name}
                  </p>
                  <span
                    className="panel-icon has-text-danger"
                    onClick={() => setListIdToDeleteHandler(list.id)}
                  >
                    <i className="fas fa-times-circle"></i>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lists;
