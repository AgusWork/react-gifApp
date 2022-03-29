import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
import { SpinnerCircular } from 'spinners-react';

const GifGrid = ({category}) => {
    
    const {loading, data:images} = useFetchGifs( category );   
        
    return (
    <>
    <h3 className='subTitle'>{category}</h3>

    {
    loading ? <SpinnerCircular speed='150' color='red' secondaryColor='white'/> : <SpinnerCircular enabled={false} />
  }
    
    <div className='cardGrid'>
            {
                images.map( img => {
                   return <GifGridItem
                        key={img.id}
                        {...img}
                        // otra forma de mandar props si es solo un array
                    />
                })
            }
        </div>
    </>
    
  )


}

export default GifGrid
