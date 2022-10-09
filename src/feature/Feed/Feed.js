import Post from "../../components/post/post";
import Flair from "../../components/flair/Flair";
import useFetchPost from "../../hooks/useFetchPost";
import { useSubreddit } from "../../context/subreddits";
import { useEffect, useState } from "react";

const Feed = () => {

    const [flair, setFlair] = useState('');
    const { subreddit } = useSubreddit();
    const { isError, response, fetchPost } = useFetchPost(subreddit);

    useEffect(() => {
        fetchPost(subreddit)
    }, [subreddit, fetchPost]);

    // generates an array of flairs
    const allFlairs = response.map(post => post.data.link_flair_text).filter(flair => flair !== null);
    const uniqueFlairs = [...new Set(allFlairs)];

    return (
        <div className='feed'>
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
            <div className="flairContainer">
                {uniqueFlairs.map((flair, index) => (
                    <Flair flair={flair} key={index} />
                ))}
            </div>
        </div>
    )
};

export default Feed;

