import {useEffect, useState} from "react";

function useJsonFetch(url, opts) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, opts);
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData().then(r => {
        });
    }, [url, opts]);

    return [data, loading, error];
}

export default useJsonFetch;