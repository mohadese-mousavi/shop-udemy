import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './card-icon.style.scss';
import {connect} from 'react-redux';
import {toggleCardHidden} from '../../redux/card/card.actions'

const CardIcon = ({toggle}) => (
    <div className="card-icon" onClick={toggle}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => (
    {
        toggle : () => dispatch(toggleCardHidden())
    }
)
export default connect(null,mapDispatchToProps)(CardIcon);