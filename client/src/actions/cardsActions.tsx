import {
  CardDispatchTypes,
  CardType,
  SearchType,
  CARD_FAIL,
  CARD_LOADING,
  CARD_SEARCH_LOADING,
  CARD_SEARCH_SUCCESS,
  CARD_SUCCESS,
  CARD_SEARCH_FAIL,
  SELECTS_LOADING,
  TEAM_SUCCESS,
  SELECTS_FAIL,
  TeamsType,
  POSITION_SUCCESS,
  RARITIES_SUCCESS,
  PositionsType,
  RaritiesType,
  SeriesType,
  SERIES_SUCCESS,
  CARD_ADD_LOADING,
  CARD_ADD_SUCCESS,
  CARD_ADD_FAIL,
  CARD_EDIT_SUCCESS,
  CardAddType,
  CardEditType,
} from '../types';
import axios from 'axios';
import { Dispatch } from 'hoist-non-react-statics/node_modules/@types/react';

export const GetCards = () => async (dispatch: Dispatch<CardDispatchTypes>) => {
  try {
    dispatch({
      type: CARD_LOADING,
    });

    const res = await axios.get<CardType[]>(
      `${process.env.REACT_APP_API_URL}/cards`
    );

    dispatch({
      type: CARD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CARD_FAIL,
    });
  }
};

export const GetCardByName =
  (cardName: string) => async (dispatch: Dispatch<CardDispatchTypes>) => {
    try {
      dispatch({
        type: CARD_SEARCH_LOADING,
      });

      const res = await axios.get<SearchType>(
        `${process.env.REACT_APP_API_URL}/cards/${cardName}`
      );

      dispatch({
        type: CARD_SEARCH_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CARD_SEARCH_FAIL,
      });
    }
  };

export const GetTeams = () => async (dispatch: Dispatch<CardDispatchTypes>) => {
  try {
    dispatch({
      type: SELECTS_LOADING,
    });

    const res = await axios.get<TeamsType[]>(
      `${process.env.REACT_APP_API_URL}/teams`
    );

    dispatch({
      type: TEAM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SELECTS_FAIL,
    });
  }
};

export const GetPositions =
  () => async (dispatch: Dispatch<CardDispatchTypes>) => {
    try {
      dispatch({
        type: SELECTS_LOADING,
      });

      const res = await axios.get<PositionsType[]>(
        `${process.env.REACT_APP_API_URL}/positions`
      );

      dispatch({
        type: POSITION_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SELECTS_FAIL,
      });
    }
  };

export const GetRarities =
  () => async (dispatch: Dispatch<CardDispatchTypes>) => {
    try {
      dispatch({
        type: SELECTS_LOADING,
      });

      const res = await axios.get<RaritiesType[]>(
        `${process.env.REACT_APP_API_URL}/rarities`
      );

      dispatch({
        type: RARITIES_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SELECTS_FAIL,
      });
    }
  };

export const GetSeries =
  () => async (dispatch: Dispatch<CardDispatchTypes>) => {
    try {
      dispatch({
        type: SELECTS_LOADING,
      });

      const res = await axios.get<SeriesType[]>(
        `${process.env.REACT_APP_API_URL}/series`
      );

      dispatch({
        type: SERIES_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SELECTS_FAIL,
      });
    }
  };

export const addCard =
  (card: CardAddType) => async (dispatch: Dispatch<CardDispatchTypes>) => {
    try {
      dispatch({
        type: CARD_ADD_LOADING,
      });

      const res = await axios.post<any>(
        `${process.env.REACT_APP_API_URL}/cards`,
        card
      );

      dispatch({
        type: CARD_ADD_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CARD_ADD_FAIL,
        payload: error,
      });
    }
  };

export const editCardAction =
  (card: CardEditType) => async (dispatch: Dispatch<CardDispatchTypes>) => {
    try {
      dispatch({
        type: CARD_LOADING,
      });

      const res = await axios.put<any>(
        `${process.env.REACT_APP_API_URL}/cards/${card.id}`,
        card
      );

      dispatch({
        type: CARD_EDIT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CARD_FAIL,
      });
    }
  };
