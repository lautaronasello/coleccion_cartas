import { CardDispatchTypes, CARD_FAIL, CARD_LOADING, CARD_SUCCESS } from "../types"
import axios from 'axios'
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react"


const cards = {
    data:'hola'
}

export const GetCards = () => async(dispatch:Dispatch<CardDispatchTypes>)=>{
    try{
        dispatch({
            type: CARD_LOADING
        })
        let res = await axios.get('http://localhost:4000/cards')
        
        dispatch({
            type: CARD_SUCCESS,
            payload: res.data,
        })
    } catch(err){
        dispatch({
            type: CARD_FAIL
        })
    }
}




