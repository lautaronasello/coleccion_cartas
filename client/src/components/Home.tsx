import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCardsAction } from '../actions/cardsActions'
import { stateInterface } from '../reducers/cardsReducers'
import { START_CARDS_DOWNLOAD } from '../types'

interface Props {
    name: string
}

function Home({name}:Props) {

    const dispatch = useDispatch()
    const loading = useSelector<stateInterface>(state => state.loading)

    const changeLoading =()=>{
        dispatch({type:START_CARDS_DOWNLOAD,payload:!loading})
    }


    return (
        <div>
            <Button variant='contained' onClick={changeLoading} > Switch loading</Button>
            {loading && <div>hola loading</div> }
        </div>
    )
}


export default Home

