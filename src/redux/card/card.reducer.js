import CardActionTypes from './card.types';
import {addItemToCard} from './card.utilities'

const INITIAL_STATE = {
    hidden : true,
    cardItem : []
}

const cardReducer = (state=INITIAL_STATE,action)=> {
    switch(action.type){
        case CardActionTypes.TOGGLE_CARD_HIDDEN :
            return {
                ...state ,
                hidden : !state.hidden
            }

        case CardActionTypes.ADD_ITEM_TO_CARD :
            return {
                ...state ,
                cardItem : addItemToCard(state.cardItem,action.payload)
            }

        default : 
        return state   
    }
}

export default cardReducer;