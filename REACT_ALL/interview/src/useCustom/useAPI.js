import React, { useEffect, useState } from 'react'

export function useAPI(url) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(url).then(res => res.json()).then(data => setData(data))
        }

        fetchData();
    }, [url])

    return { data }
}
