import { useState, useEffect } from "react"
import GetGifs from '../helpers/GetGifs';

const useFetchGifs = (category) => {
  
    const [ state, setState] = useState({
        data: [],
        loading: true
    });
     useEffect(() => {
        GetGifs( category )
        .then(imgs => {
            
            setTimeout(() =>{
                setState({
                    data: imgs,
                    loading: false
                });

            }, 3000 );
            
            
            
      })
    }, [category])
    // si mando el array vacio le dice a useEffect que solo se active una vez
    
    return state; 
}

export default useFetchGifs
