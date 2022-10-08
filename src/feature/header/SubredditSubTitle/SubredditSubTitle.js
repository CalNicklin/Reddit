const SubredditSubTitle = (props) => {

    const { about } = props;
    const { public_description } = about;

    return (
        <div>
            {!about && (<div>...loading</div>)}
            {about && public_description}
        </div>
    )
};

export default SubredditSubTitle;