import Post from "../../components/post/post";
import useFetchPost from "../../hooks/useFetchPost";
import { useSubreddit } from "../../context/subreddits";
import { useEffect } from "react";

const Feed = () => {

    const { subreddit } = useSubreddit();
    const { isError, response, fetchPost } = useFetchPost(subreddit);

    useEffect(() => {
        fetchPost(subreddit)
    }, [subreddit, fetchPost]);

    return (
        <main>
            {response && !isError && (response.map((post, index) => (
                <div className='post' key={index}>
                    <Post
                        post={post.data}
                    />
                </div>
            )))}
            {isError && <div className="post">Something went wrong</div>}
        </main>
    )
};

export default Feed;

