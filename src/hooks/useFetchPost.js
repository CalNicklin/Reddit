import axios from "axios";
import { useCallback, useState } from "react";

const useFetchPost = (url) => {
    const [isError, setError] = useState(false);
    const [response, setResponse] = useState([]);

    const fetchPost = useCallback(async () => {
        setError(false);
        try {
            const res = await axios(url, {
            })
            const posts = res.data.data.children;
            setResponse(posts);
        }
        catch (error) {
            setError(true);
            console.log(error)
        };
    }, [url]);

    return { isError, response, fetchPost };
};

export default useFetchPost;