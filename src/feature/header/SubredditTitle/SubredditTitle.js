import { useSubreddit } from "../../../context/subreddits"


const SubredditTitle = () => {

    const { chooseSubreddit } = useSubreddit();

    const handleChange = (event) => {
        chooseSubreddit(event.target.value);
    };

    return (
        <select onChange={handleChange}>
            <option value='https://www.reddit.com/r/RunningShoeGeeks'>r/RunningShoeGeeks</option>
            <option value='https://www.reddit.com/r/JamesHoffmann'>r/JamesHoffman</option>
            <option value='https://www.reddit.com/r/hackernoon'>r/hackernoon</option>
        </select>
    )
};

export default SubredditTitle;