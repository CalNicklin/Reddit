import VotingActions from "./voting actions/VotingActions";
import CommentsActions from "./comment actions/CommentsActions";

const Post = (props) => {
    const { post } = props;
    const { author, created, title, link_flair_text, thumbnail, ups, num_comments } = post;
    const date = new Date(created * 1000).toDateString();


    return (
        <div>
            <div className="authorDate">
                <div className="author">
                    {author}
                </div>
                <div className="date">
                    {date}
                </div>
            </div>
            <div className="thumbnailTitleFlair">
                <div className="titleFlair">
                    <h2>
                        {title}
                    </h2>
                    <div className="postFlair">
                        {link_flair_text}
                    </div>
                </div>
                <div className="thumbnail">
                    <img src={thumbnail} />
                </div>
            </div>
            <div>
                <VotingActions votes={ups} />
                <CommentsActions comments={num_comments} />
            </div>
        </div>
    )
};

export default Post;