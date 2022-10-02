const CommentsActions = (props) => {

    const { comments } = props
    return (
        <div className="commentsActions">
            <div className="viewComments">
                <img src="commentsIcon.svg" alt="comments icon"/>
            </div>
            <div className="numComments">
                {comments}
            </div>
        </div>
    )
};

export default CommentsActions;