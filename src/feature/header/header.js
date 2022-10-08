import SubredditSubTitle from "./SubredditSubTitle/SubredditSubTitle";
import SubredditTitle from "./SubredditTitle/SubredditTitle";
import { useSubreddit } from "../../context/subreddits";
import useFetchSubreddit from "../../hooks/useFetchSubreddit";
import { useEffect } from "react";
import SubredditLogo from "./SubredditLogo/SubredditLogo";

const Header = () => {

    const { subreddit } = useSubreddit();
    const { isError, response, fetchSubreddit } = useFetchSubreddit(subreddit);

    const { data } = response;

    useEffect(() => {
        fetchSubreddit(subreddit)
    }, [subreddit, fetchSubreddit]);


    if (!isError && data) {
        return (
            <header>
                <div>
                    <SubredditLogo />
                </div>
                <div>
                    <SubredditTitle handle={data} />
                </div>
                <div>
                    <SubredditSubTitle about={data} />
                </div>
                <div>
                    Description
                </div>
            </header>
        )
    } else {
        return (
            <p>Loading</p>
        )
    };
};

export default Header;