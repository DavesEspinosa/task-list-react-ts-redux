import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setNotification } from "../store/actions";
import { RootState } from "../store/store";

//!Notification component is functional component so we need to add FC type and it will have msg prop so we will create NotificationsProps interface and add msg property and the type of this property is string. We also need RootState because we need to get the type from notification state. Notification will close after 3 seconds and for that we will use setTimeout method so we need timeout variable which is of type ReturnType<typeof setTimeout> In useEffect hook we can check if the message is not empty and if this is true we need to clearTimeout if timeout is set and call setTimeout and dispatch setNotification action with empty string as a parameter to reset the message and if message is empty notification will not be visible. Notification has remove button and when this button is clicked we can dispatch setNotification action with empty string as a parameter and clear the timeout to hide the notification.


interface NotificationProps {
  msg: string;
}

let timeout: ReturnType<typeof setTimeout>;

const Notification: FC<NotificationProps> = ({ msg }) => {
  const dispatch = useDispatch();
  const type = useSelector((state: RootState) => state.notification.type);

  useEffect(() => {
    if (msg !== "") {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(setNotification(""));
      }, 3000);
    }
  }, [dispatch, msg]);

  const closeNotification = () => {
    dispatch(setNotification(""));
    clearTimeout(timeout);
  };
  return (
    <div
      className={
        msg
          ? `${
              type === "danger"
                ? "notification is-danger"
                : "notification is-primary"
            }`
          : "notification is-hidden"
      }
    >
      <button className="delete" onClick={closeNotification}></button>
      <p>{msg}</p>
    </div>
  );
};

export default Notification;
