import TextTransition, { presets } from "react-text-transition";

const SubredditSubTitle = (props) => {

    const { about } = props;
    const { public_description } = about;

    return (
        <div className="subredditSubTitle">
            {!about && (<div>...loading</div>)}
            <TextTransition springConfig={presets.default} direction='down'>
                {about && public_description}
            </TextTransition>
        </div>
    )
};

export default SubredditSubTitle;