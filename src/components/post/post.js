import VotingActions from "./voting actions/VotingActions";
import CommentsActions from "./comment actions/CommentsActions";

const Post = (props) => {
    const { post } = props;
    const { author, created, title, link_flair_text, thumbnail, ups, num_comments } = post;
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
                <VotingActions votes={ups} />
                <CommentsActions comments={num_comments} />
            </div>
        </div>
    )
};

export default Post;