import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string): [any[], string, () => void] => {
    const [data, setData] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchData = () => {
        axios.get(url)
            .then((res) => setData(res.data))
            .catch((error) => setErrorMessage(error));
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    const refetch = () => {
        fetchData();
    };

    return [data, errorMessage, refetch];
};

export default useFetch;
