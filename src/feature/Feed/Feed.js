import Post from "../../components/post/post";
import useFetchPost from "../../hooks/useFetchPost";
import { useSubreddit } from "../../context/subreddits";
import { useFlair } from "../../context/flairs";
import { useEffect } from "react";
import Filters from "../../components/Filters/Filters";

const Feed = () => {

    const { subreddit } = useSubreddit();
    const { isError, response, fetchPost } = useFetchPost(subreddit);

    //  re-renders the list of posts when the subreddit is changed
    useEffect(() => {
        fetchPost(subreddit)
    }, [subreddit, fetchPost]);

    // generates an array of unique flairs for the user to filter the posts.
    const allFlairs = response.map(post => post.data.link_flair_text).filter(flair => flair !== null);
    const uniqueFlairs = [...new Set(allFlairs)];

    const { flair, chooseFlair, resetFlair } = useFlair();

    // if a flair is selected the posts are filtered
    const filteredResponse = response.filter(post => post.data.link_flair_text === flair);

    useEffect(() => {
        chooseFlair('')
    }, [subreddit]);

    return (
        <div className='feed'>
            {uniqueFlairs.length > 0 && (
                <Filters uniqueFlairs={uniqueFlairs} resetFlair={resetFlair} />
            )}
            <main id='feed'>
                {response && !isError && (
                    // default flair is '' which displays all posts. Otherwise, show filtered.
                    (flair === '' ? response : filteredResponse).map((post, index) => (
                        <Post
                            post={post.data} key={index} />
                    ))
                )}
                {isError && <div className="post">Something went wrong</div>}
            </main>
        </div>
    )
};

export default Feed;

