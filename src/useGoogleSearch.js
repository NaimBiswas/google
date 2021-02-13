import React, { useEffect, useState } from 'react'
import API_KEY from './keys';
const CONTEXT_KEY = "4dd96bdb4075086e9";
const useGoogleSearch = (term) => {
   const [data, setData] = useState(null)
   useEffect(() => {
      const fetchData = async () => {
         fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
         )
            .then(reponse => reponse.json())
            .then(result => {
               setData(result)
            }).catch((error) => {
               setData(error)
            })
      }
      fetchData()
   }, [term])
   return { data };

}
export default useGoogleSearch
