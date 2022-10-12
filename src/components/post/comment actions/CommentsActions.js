const CommentsActions = (props) => {

    const { comments, handleClick } = props;

    return (
        <div className="commentsActions" onClick={handleClick}>
            <div className="viewComments">
                <img src="commentsIcon.svg" alt="comments icon" />
            </div>
            <div className="numComments">
                {comments}
            </div>
        </div>
    )
};

export default CommentsActions;