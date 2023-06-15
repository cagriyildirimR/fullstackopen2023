export const FeedbackButton = ({text, handleClick}) => {
    return(
        <span>
            <button onClick={handleClick}>{text}</button>
        </span>
    )
}