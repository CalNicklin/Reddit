const SubredditSubTitle = (props) => {

    const { about } = props;

    return (
        <div>
            {!about && (<div>...loading</div>)}
        </div>
    )
};

export default SubredditSubTitle;