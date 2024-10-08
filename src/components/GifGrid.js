import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: imgs, loading } = useFetchGifs(category);



    return (
        <>
            <div className='category-container'>
                <h3 className="animate__animated animate__fadeIn"> {category} </h3>

                {loading && <p className="animate__animated animate__flash">Loading...</p>}

                <div className='card-grid'>
                    {imgs.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default GifGrid
