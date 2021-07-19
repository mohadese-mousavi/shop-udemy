import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import  './card-dropdown.style.scss';
import CardItem from '../card-item/card-item.component';
import {connect} from 'react-redux'

const CardDropDown = ({cardItem}) => (
    <div className="card-dropdown">
        <div className="card-items">
            {
                cardItem.map(cItem=>(
                    <CardItem key={cItem.id} item={cItem}></CardItem>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({card:{cardItem}}) => ({
    cardItem
})

export default connect(mapStateToProps)(CardDropDown);