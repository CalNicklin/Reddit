import axios from "axios";
import { useCallback, useState } from "react";

const useFetchComments = () => {
    const [isError, setError] = useState(false);
    const [response, setResponse] = useState({});

    const fetchComments = useCallback(async (url) => {
        setError(false);
        try {
            const res = await axios(url, {
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