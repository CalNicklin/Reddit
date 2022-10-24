import axios from "axios";
import { useCallback, useState } from "react";

// unlike the fetchPost and fetchSubreddit hooks, this hook doesn't apply the URL const as an argument 
// to useFetchComments but is inputted to the fetchComments function. This is the only way that I could make it work - I don't know why.
// For this reason, the test suite is failing on this component 23/10/2022.

const useFetchComments = () => {
    const [isError, setError] = useState(false);
    // initial state is an object.
    const [response, setResponse] = useState({});

    const fetchComments = useCallback(async (url) => {
        setError(false);
        try {
            const res = await axios.get(url, {
            })
            const comments = res.data[1].data.children;
            setResponse(comments);
        }
        catch (error) {
            setError(true);
            console.log(error);
        };
    }, []);

    return { isError, response, fetchComments };
};

export default useFetchComments;