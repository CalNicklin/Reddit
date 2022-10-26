import VotingActions from "./voting actions/VotingActions";
import CommentsActions from "./comment actions/CommentsActions";
import { useEffect, useState, useRef } from "react";
import useFetchComments from "../../hooks/useFetchComments";
import autoAnimate from "@formkit/auto-animate"

const Post = (props) => {
    // Passed props from the feed.js component which fetches post data from reddit.
    const { post } = props;
    const { author, created, title, link_flair_text, thumbnail, ups, num_comments, permalink } = post;

    // reddit api provides date in UTC format
    const date = new Date(created * 1000).toDateString();

    const url = `https://www.reddit.com${permalink}.json`;

    // regarding the comments section of each post which is made visible in 'commentd actions'
    const [commentVisibility, setCommentsState] = useState(false);
    const { fetchComments, response } = useFetchComments();

    useEffect(() => {
        fetchComments(url)
    }, [url]);

    // the fetchComments hook returns an object of comments, this returns an array of the 'body' property.
    const comments = Object.values(response).map(comment =>
        [comment.data.body,
        comment.data.author]
    )

    // Toggles comments visibility
    const handleClick = () => {
        setCommentsState(current => !current);
    };

    // Animations
    const parentRef = useRef();
    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef]);

    return (
        <div className="post">
            <div className="authorDate">
                <h4 className="author" role="generic">
                    {author}
                </h4>
                <h5 className="date" role="generic">
                    {date}
                </h5>
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
                {/* 'self' is the reddit default for no thumbnail data */}
                {thumbnail !== 'self' && (<div className="thumbnail">
                    <img src={thumbnail} alt={title} />
                </div>)}
            </div>
            <div className='postActions'>
                <VotingActions votes={ups} />
                <CommentsActions comments={num_comments} handleClick={handleClick} />
            </div>
            {commentVisibility && (
                <div ref={parentRef}>
                    <ul>
                        {comments.map((comment, index) =>
                            <li key={index}>{comment[1]}<p>{comment[0]}</p></li>)}
                    </ul>
                </div>
            )}
        </div>
    )
};

export default Post;