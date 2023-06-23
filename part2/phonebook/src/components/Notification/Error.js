import {Notification} from "./Notification";

export const ErrorNotification = ({message}) => {
    return (
        <div>
            <Notification message={message} color={'#f30000'}/>
        </div>
    )
}
