export const addItemToCard = (cardItems,cardItemToAdd)=>{

    const existItem = cardItems.find(cardItem => cardItem.id === cardItemToAdd.id);

    if(existItem){
        return cardItems.map( cardItem=> 
            cardItem.id === cardItemToAdd.id ? 
            {...cardItem , quantity : cardItem.quantity + 1 } 
            : cardItem
        )
    }

    return [ ...cardItems , {...cardItemToAdd , quantity : 1 }]

}