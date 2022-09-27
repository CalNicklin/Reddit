import VotingActions from "./voting actions/VotingActions";
import CommentsActions from "./comment actions/CommentsActions";

const Post = () => {
    const { avatar, author, time, title, flair, thumbnail } = useFetchPost(
        'https://www.reddit.com/r/RunningShoeGeeks/comments/xnmit3/kipchoge_beat_his_berlin_record_on_alphafly_2s/.json');

    return(
        <div>
            <div>
                Avatar
            </div>
            <div>
                Author
            </div>
            <div>
                Time
            </div>
            <div>
                Title
            </div>
            <div>
                Flair
            </div>
            <div>
                Thumbnail
            </div>
            <div>
                <VotingActions />
                <CommentsActions />
            </div>
        </div>
    )
};

export default Post;