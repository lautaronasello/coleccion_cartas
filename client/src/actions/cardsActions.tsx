import { START_CARDS_DOWNLOAD } from "../types"

export function getCardsAction (){
     return async (dispatch: (arg0: () => { type: string; payload: boolean }) => void) =>{
        dispatch(downloadCards)
    }
}


const downloadCards =()=>({
    type: START_CARDS_DOWNLOAD,
    payload:true,
})


