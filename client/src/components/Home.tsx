import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCards } from '../actions/cardsActions'
import { RootStore } from '../store'



function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCards =()=> dispatch(GetCards())
        getCards()
    }, [dispatch])


    const cards = useSelector((state: RootStore) => state.cards)

    console.log(cards)

   return (
        <div>
            <Button variant='contained'  > Switch loading</Button>
        </div>
    )
}


export default Home

