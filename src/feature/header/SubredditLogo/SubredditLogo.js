import { useSubreddit } from "../../../context/subreddits";

const SubredditLogo = () => {

    const { subreddit } = useSubreddit();

    const loadIcon = (subreddit) => {
        switch (subreddit) {
            case 'https://www.reddit.com/r/RunningShoeGeeks':
                return '/index.png';
            case 'https://www.reddit.com/r/JamesHoffmann':
                return '/communityIcon_1rqm2nd9vzb41.png';
            case 'https://www.reddit.com/r/hackernoon':
                return '/communityIcon_y4ufy5ssf3m11.png';
            default:
                return '/index.png';
        }
    }

    return (
        <img className='logo' src={loadIcon(subreddit)} alt='subreddit logo' />
    )
};

export default SubredditLogo;