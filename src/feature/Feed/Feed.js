import Post from "../../components/post/post";
import useFetchPost from "../../hooks/useFetchPost";

const Feed = () => {

    const { isError, response, fetchPost } = useFetchPost(
        'https://www.reddit.com/r/RunningShoeGeeks/.json');


    return (
        <div>
            {
                response.map((post, index) => (
                    <main className='feed'>
                        <Post
                            key={index}
                            post={post.data}
                        />
                    </main>
                ))
            }
        </div>
    )
};

export default Feed;

