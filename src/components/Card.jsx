import React from 'react';
import PropTypes from 'prop-types';

const Card = ({img}) => {

    return (
        <div className="card" style={{ width: "15rem"}}>
            <img src="https://images.unsplash.com/photo-1622629985460-8d7a320b22b6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMzgzNTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjMyODY2ODg&ixlib=rb-1.2.1&q=85" className="card-img-top" alt="img.png"/>               
        </div>
    )
}

Card.propTypes = {
    //img: PropTypes.string
}

export default Card;
