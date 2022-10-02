import SubredditTitle from "./SubredditTitle/SubredditTitle";

const Header = () => {
    return (
        <header>
            <div>
                <img src='/index.png' alt='Subreddit Title'/> 
            </div>
            <div>
                <SubredditTitle />
            </div>
            <div>
                Subtitle
            </div>
            <div>
                Description
            </div>
        </header>
    )
};

export default Header;