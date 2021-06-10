import React, { useState, useEffect } from 'react';
import Card from './Card';

const Cards = () => {

    const [images, setImages] = useState({});
    
    const peticion = async () => {
        const res = await fetch("https://api.unsplash.com/photos/random?client_id=cIWV9te0YZ-OqbSid4yLnmP9gkNL78ttu7CDXwiM39I");
        const data = await res.json();
        setImages(data);
        console.log(images);
    }; 

    useEffect(() => {
        peticion();
    }, [])

    return (
        <>
            <Card img={images}/>
        </>
    )
}

export default Cards;
