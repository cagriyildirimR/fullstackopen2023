import {Notification} from "./Notification";
export const SuccessNotification = ({message}) => {
    const style = {
        backgroundColor: '#418812',
    }
    return (
        <div style={style}>
            <Notification message={message}/>
        </div>
    )
}
