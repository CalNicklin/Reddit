const CommentsActions = (props) => {

    const { comments, handleClick } = props;

    return (
        <div className="commentsActions">
            <div className="viewComments">
                <img src="commentsIcon.svg" alt="comments icon" onClick={handleClick} />
            </div>
            <div className="numComments">
                {comments}
            </div>
        </div>
    )
};

export default CommentsActions;