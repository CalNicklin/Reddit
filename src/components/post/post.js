import VotingActions from "./voting actions/VotingActions";
import CommentsActions from "./comment actions/CommentsActions";

const Post = (props) => {
    const { post } = props;
    const { author, created, title, link_flair_text, thumbnail } = post;
    const date = new Date(created * 1000).toDateString();


    return(
        <div>
            <div>
                {author}
            </div>
            <div>
                {date}
            </div>
            <div>
                {title}
            </div>
            <div>
                {link_flair_text}
            </div>
            <div>
                <img src={thumbnail} />
            </div>
            <div>
                <VotingActions />
                <CommentsActions />
            </div>
        </div>
    )
};

export default Post;