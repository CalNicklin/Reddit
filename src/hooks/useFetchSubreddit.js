import axios from "axios";
import { useCallback, useState, useEffect } from "react";

const useFetchSubreddit = (url) => {
    const [isError, setError] = useState(false);
    const [response, setResponse] = useState([]);

    const fetchSubreddit = useCallback(async () => {
        setError(false);
        try {
            const res = await axios.get(`${url}/about.json`, {
            })
            setResponse(res.data);
        }
        catch (error) {
            setError(true);
            console.log(error)
        };
    }, [url]);

    useEffect(() => {
        fetchSubreddit();
      }, [fetchSubreddit]);

    return { isError, response, fetchSubreddit };
};

export default useFetchSubreddit;