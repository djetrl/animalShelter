import { useState, useEffect, useMemo } from "react";
function useData (ServiceMethod){
    
    const [NoMemoizedData , setData] = useState([]);
    const [error , setError] = useState(false);
    const [loading , setLoading] = useState(true);


    useEffect(()=>{
      onRequest();
    }, [])

  
    const onRequest = () => {
      ServiceMethod()
              .then(onEventListLoaded)
              .catch(onError)
    } 

    const onEventListLoaded = (data)=>{
      setData(data);
      setLoading(false);
    }

    const onError = () => {
      setError(true);
      setLoading(false)
    }
    

    const data =  useMemo(()=>{
      return NoMemoizedData;
    }, [NoMemoizedData])
    return {data, loading , error };

}



export default useData;