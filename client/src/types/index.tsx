export const START_CARDS_DOWNLOAD = 'START_CARDS_DOWNLOAD';
export const CARD_LOADING = 'CARD_LOADING'
export const CARD_FAIL = 'CARD_FAIL'
export const CARD_SUCCESS = 'CARD_SUCCESS'

export type CardsTypes ={
    // data:{
    //     id: number,
    //     name: string,
    //     lastname:string,
    //     picture: string,
    //     rarity:string,
    //     position:string,
    //     team:string,
    //     serie:string
    // }
    cards:allCards[]
}

export type allCards ={
    
        id: number,
        name: string,
        lastname:string,
        picture: string,
        rarity:string,
        position:string,
        team:string,
        serie:string
    
}

export interface CardLoading {
    type: typeof CARD_LOADING
}

export interface CardFail {
    type: typeof CARD_FAIL
}

export interface CardSuccess {
    type: typeof CARD_SUCCESS,
    payload: CardsTypes
}

export type CardDispatchTypes = CardLoading | CardFail | CardSuccess