import VotingActions from "./voting actions/VotingActions";
import CommentsActions from "./comment actions/CommentsActions";
import { useState } from "react";

const Post = (props) => {
    const { post } = props;
    const { author, created, title, link_flair_text, thumbnail, ups, num_comments } = post;
    const date = new Date(created * 1000).toDateString();

    const [comments, setCommentsState] = useState(false);

    const handleClick = () => {
        if (!comments) {
            setCommentsState(true)
        } else {
            setCommentsState(false)
        }
    };


    return (
        <div className="post">
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
                    {link_flair_text !== null && (<div className="postFlair">
                        {link_flair_text}
                    </div>)}
                </div>
                {thumbnail !== 'self' && (<div className="thumbnail">
                    <img src={thumbnail} />
                </div>)}
            </div>
            <div className='postActions'>
                <VotingActions votes={ups} />
                <CommentsActions comments={num_comments} handleClick={handleClick} />
            </div>
            {comments && (
                <div>
                    <h1>COMMENT</h1>
                </div>
            )}
        </div>
    )
};

export default Post;