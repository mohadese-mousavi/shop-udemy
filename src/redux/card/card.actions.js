import CardActionTypes from './card.types'

export const toggleCardHidden = isShow => ({
    type: CardActionTypes.TOGGLE_CARD_HIDDEN ,
    payload : isShow
})
export const addItem = item => ({
    type: CardActionTypes.ADD_ITEM_TO_CARD ,
    payload : item
})