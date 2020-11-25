import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // srzSq8ZKJOgIY4RAGLvAHSebDS2IG1g5  - API de mi cuenta GIPHY

    const {data:images, loading} = useFetchGifs( category);

 

    


    return (
        <>
        <h3 className="animate__animated animate__fadeIn"> { category }</h3>

        {loading && <p className="animate__animated animate__flash">Loading...</p> }

         <div className="card-grid">
           
        
                {
                    images.map( img => (
                      <GifGridItem 
                        key= {img.id}
                        { ...img }  //con esto mandamos las propiedades como independientes
                    />
                    ))
                }
            
        </div> 
        </>
    )
}
