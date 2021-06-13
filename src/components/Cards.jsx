import React, { useState, useEffect } from 'react';
import Card from './Card';

const Cards = () => {

    const [images, setImages] = useState([{
        id: 2133,
        urls: {
            regular: "ahre"
        }
    }]);
    
    const peticion = async () => {
        const res = await fetch("https://api.unsplash.com/photos?client_id=cIWV9te0YZ-OqbSid4yLnmP9gkNL78ttu7CDXwiM39I");
        const data = await res.json();
        //Los sets son asyncronos
        setImages(data);
        console.log(images)
    }; 

    useEffect(() => {
        peticion(); 
    }, []);

    return (
        <>
        {images.map((img) => {
            return <Card key={img.id} img={img.urls.regular}/>
        })}
        </>
    )
}

export default Cards;
