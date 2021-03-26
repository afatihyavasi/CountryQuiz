import {useState, useEffect} from 'react';


const useFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(response => setData(response))
    }, [])


    return data;
}
export default useFetch;


