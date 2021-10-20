import { CardDispatchTypes, CardsTypes, CARD_FAIL, CARD_LOADING, CARD_SUCCESS } from "../types"
import axios from 'axios'
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react"



export const GetCards = () => async(dispatch:Dispatch<CardDispatchTypes>)=>{

    
    try{
        let res:CardsTypes[] 
        dispatch({
            type: CARD_LOADING
        })
        
        res = await axios.get('http://localhost:4000/cards')
        dispatch({
            type: CARD_SUCCESS,
            payload: res
        })
    } catch(err){
        dispatch({
            type: CARD_FAIL
        })
    }
}




