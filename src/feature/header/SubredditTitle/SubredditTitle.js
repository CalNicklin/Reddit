import { useSubreddit } from "../../../context/subreddits"


const SubredditTitle = () => {

    const { chooseSubreddit } = useSubreddit();

    const handleChange = (event) => {
        chooseSubreddit(event.target.value);
    };

    return (
        <select onChange={handleChange}>
            <option value='https://www.reddit.com/r/RunningShoeGeeks.json'>r/RunningShoeGeeks</option>
            <option value='https://www.reddit.com/r/JamesHoffmann.json'>r/JamesHoffman</option>
            <option value='https://www.reddit.com/r/hackernoon.json'>r/hackernoon</option>
        </select>
    )
};

export default SubredditTitle;