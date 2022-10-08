import axios from "axios";
import { useCallback, useState } from "react";

const useFetchSubreddit = (url) => {
    const [isError, setError] = useState(false);
    const [response, setResponse] = useState([]);

    const fetchSubreddit = useCallback(async () => {
        setError(false);
        try {
            const res = await axios(`${url}/about.json`, {
            })
            const subredditAbout = res.data;
            setResponse(subredditAbout);
        }
        catch (error) {
            setError(true);
            console.log(error)
        };
    }, [url]);

    return { isError, response, fetchSubreddit };
};

export default useFetchSubreddit;