import { useEffect, useState } from "react"

const useFetch = (fetchFunction, param) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            try {
                const response = await fetchFunction(param);
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [fetchFunction, param])

    return { data, setData, loading, error}
}

export default useFetch;