import { createContext, useContext, useState } from "react";

export const SubredditContext = createContext({});

export const useSubreddit = () => useContext(SubredditContext);

export const SubredditProvider = ({ children }) => {

    const [subredditState, setSubredditState] = useState({
        // initial state/default subreddit to render homepage.
        subreddit: 'https://www.reddit.com/r/RunningShoeGeeks',
        chooseSubreddit: (url) => {
            setSubredditState((prevState) => {
                return {
                    ...prevState,
                    subreddit: url
                };
            });
        }
    });

    return (
        <SubredditContext.Provider value={subredditState}>{children}</SubredditContext.Provider>
    );
};

export default SubredditContext;


