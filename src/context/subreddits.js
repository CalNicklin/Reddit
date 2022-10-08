import { createContext, useContext, useState } from "react";

export const SubredditContext = createContext({});

export const useSubreddit = () => useContext(SubredditContext);

export const SubredditProvider = ({ children }) => {

    const [subredditState, setSubredditState] = useState({
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


