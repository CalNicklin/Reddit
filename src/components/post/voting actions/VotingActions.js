const VotingActions = (props) => {

    const { votes } = props;

    return (
        <div className="votes">
            <div className="upvoteIcon">
                <img src="Upvote_Icon.svg" alt="upvotes icon"/>
            </div>
            <div className="voteCounter">
                {votes}
            </div>
        </div>
    )
};

export default VotingActions;