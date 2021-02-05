import { NotificationAction, SET_NOTIFICATION } from "../types";

//!We only have one action in this file and this action will be dispatched every time we add, delete or edit task or list. It has 2 parameters, msg which is a message we want to show and type which will be used to show green or red background color of the notification.

export const setNotification = (msg: string, type: string = 'success'): NotificationAction => {
  return {
    type: SET_NOTIFICATION,
    payload: {
      msg,
      type
    }
  }
}