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
} from '../types';
import axios from 'axios';
import { Dispatch } from 'hoist-non-react-statics/node_modules/@types/react';

export const GetCards = () => async (dispatch: Dispatch<CardDispatchTypes>) => {
  try {
    dispatch({
      type: CARD_LOADING,
    });

    const res = await axios.get<CardType[]>('http://localhost:4000/cards');

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
        `http://localhost:4000/cards/${cardName}`
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

    const res = await axios.get<TeamsType[]>('http://localhost:4000/teams');

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
        'http://localhost:4000/positions'
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
        'http://localhost:4000/rarities'
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

      const res = await axios.get<SeriesType[]>('http://localhost:4000/series');

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
