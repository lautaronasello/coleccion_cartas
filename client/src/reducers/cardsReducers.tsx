import { PayloadAction } from "@reduxjs/toolkit"
import { START_CARDS_DOWNLOAD } from "../types";

export interface stateInterface {
    cards: string[],
    loading?: boolean 
}

const initialState ={
    cards:[],
    loading:false
}



export const Reducer =(state:stateInterface = initialState,action:PayloadAction<boolean>)=>{
switch (action.type) {
    case START_CARDS_DOWNLOAD:
        return{
            ...state,
            loading: action.payload
        }
        

    default:
        return state
}
}