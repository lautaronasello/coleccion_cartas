import {
  CardDispatchTypes,
  CARD_FAIL,
  CARD_LOADING,
  CARD_SUCCESS,
  CARD_SEARCH_FAIL,
  CARD_SEARCH_SUCCESS,
  CARD_SEARCH_LOADING,
  CardType,
  SELECTS_LOADING,
  SELECTS_FAIL,
  TEAM_SUCCESS,
  POSITION_SUCCESS,
  RARITIES_SUCCESS,
  SERIES_SUCCESS,
  CARD_ADD_LOADING,
  CARD_ADD_FAIL,
  CARD_ADD_SUCCESS,
  CARD_EDIT_SUCCESS,
  CARD_DELETE_START,
  CARD_DELETE_FAIL,
  CARD_DELETE_SUCCESS,
  TeamInterface,
  PositionInterface,
  RarityInterface,
  SeriesInterface,
  SearchType,
} from '../types';

export interface stateInterface {
  cards: CardType[];
  loading: boolean;
  search: CardType[];
  teams: TeamInterface[];
  positions: PositionInterface[];
  rarities: RarityInterface[];
  series: SeriesInterface[];
  message: string;
}

const initialState: stateInterface = {
  loading: false,
  cards: [],
  teams: [],
  search: [],
  positions: [],
  rarities: [],
  series: [],
  message: '',
};

export default function Reducer(
  state: stateInterface = initialState,
  action: CardDispatchTypes
): stateInterface {
  switch (action.type) {
    case CARD_FAIL:
    case CARD_SEARCH_FAIL:
    case SELECTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CARD_LOADING:
    case CARD_SEARCH_LOADING:
    case SELECTS_LOADING:
    case CARD_ADD_LOADING:
    case CARD_DELETE_START:
      return {
        ...state,
        loading: true,
      };
    case CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };
    case CARD_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    case TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        teams: action.payload,
      };
    case POSITION_SUCCESS:
      return {
        ...state,
        loading: false,
        positions: action.payload,
      };
    case RARITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        rarities: action.payload,
      };
    case SERIES_SUCCESS:
      return {
        ...state,
        loading: false,
        series: action.payload,
      };

    case CARD_ADD_FAIL:
    case CARD_ADD_SUCCESS:
    case CARD_EDIT_SUCCESS:
    case CARD_DELETE_FAIL:
    case CARD_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    default:
      return state;
  }
}
