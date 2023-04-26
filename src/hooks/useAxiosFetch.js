import {useState,useEffect} from 'react';
import axios from 'axios';

const useAxiosFetch = (baseUrl) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [fetchError,setFetchError] = useState(null);

    useEffect(()=>{
        const fetchData = async (url) => {
            try{
                setIsLoading(true);
                const response = await axios.get(url);
                setData(response.data);
            }
            catch(err){
                setFetchError(err.message);
            }
            finally{
               setTimeout(()=>setIsLoading(false),2000);
            }
        }
        fetchData(baseUrl);
    },[])
    return {data,isLoading,fetchError};
}
export default useAxiosFetch