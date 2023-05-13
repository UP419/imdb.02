import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string): [any[], string] => {
    const [data, setData] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        axios.get(url)
            .then((res) => setData(res.data))
            .catch((error) => setErrorMessage(error));
    }, [url]);

    return [data, errorMessage];
};

export default useFetch;
