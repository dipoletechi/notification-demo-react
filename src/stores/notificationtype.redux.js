import { createStore } from "redux"

class NotificationTypeRedux {
    static notificationTypeStore;

    constructor() {
        this.createNotificationTypeStore();
    }
    
    notificationTypeReducer(state, action) {
        state = action.selectedNotificationType;
        return state;
    }

    getViewTypeStore(callback) {
        return NotificationTypeRedux.notificationTypeStore;
    }

    createNotificationTypeStore() {
        NotificationTypeRedux.notificationTypeStore = createStore(this.notificationTypeReducer, 0);
    }

    selectedNotificationTypeDispatcher(selectedNotificationType) {
        NotificationTypeRedux.notificationTypeStore.dispatch({
            type: "SETNOTIFICATIONTYPE",
            selectedNotificationType: selectedNotificationType
        });
    }

}

export default NotificationTypeRedux;