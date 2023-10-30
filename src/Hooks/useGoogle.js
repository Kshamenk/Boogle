import { useEffect, useState } from "react"
import API_KEY from "../keys"


const CONTEXT_KEY = "0182b84968dea4a3b"


const useGoogleSearch = (textString) => {
    const [data, setData ] = useState(null)
    
    useEffect(()=>{
        const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`
        const fetchData = ()=>{
            fetch(URL).then( response => response.json() ).then(result=> setData(result))
        }
        fetchData()
        
    },[textString])

     // llamada a la API de google

    return {data}
}



export default useGoogleSearch;


