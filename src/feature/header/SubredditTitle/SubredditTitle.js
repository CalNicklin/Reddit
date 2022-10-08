import { useSubreddit } from "../../../context/subreddits"

const SubredditTitle = (props) => {

    const { handle } = props;
    const { title } = handle;
    const { chooseSubreddit } = useSubreddit();

    const handleChange = (event) => {
        chooseSubreddit(event.target.value);
    };

    return (
        <div>
            <select onChange={handleChange}>
                <option value='https://www.reddit.com/r/RunningShoeGeeks'>RunningShoeGeeks</option>
                <option value='https://www.reddit.com/r/JamesHoffmann'>JamesHoffman</option>
                <option value='https://www.reddit.com/r/hackernoon'>hackernoon</option>
            </select>
            <p>r/{title}</p>
        </div>
    )
};

export default SubredditTitle;