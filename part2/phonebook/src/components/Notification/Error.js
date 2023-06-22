import {Notification} from "./Notification";

export const ErrorNotification = ({message}) => {
    const style = {
        background:  '#f30000'
    }

    return (
        <div style={style}>
            <Notification message={message}/>
        </div>
    )
}
