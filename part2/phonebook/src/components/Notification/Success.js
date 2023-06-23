import {Notification} from "./Notification";

export const SuccessNotification = ({message}) => {
    return (
        <div>
            <Notification message={message} color={'#418812'}/>
        </div>
    )
}
