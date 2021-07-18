import React from 'react';
import './card-item.style.scss';

const CardItem = ({item:{name,imageUrl,price,quantity}}) => (
    <div className="card-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className={'name'}>{name}</span>
            <span className={'price'}>{quantity} x ${price}</span>
        </div>
        
    </div>
)

export default CardItem;