import {
  CardDispatchTypes,
  CARD_FAIL,
  CARD_LOADING,
  CARD_SUCCESS,
  CARD_SEARCH_FAIL,
  CARD_SEARCH_SUCCESS,
  CARD_SEARCH_LOADING,
  CardType,
  TeamsType,
  SELECTS_LOADING,
  SELECTS_FAIL,
  TEAM_SUCCESS,
  PositionsType,
  RaritiesType,
  SeriesType,
  POSITION_SUCCESS,
  RARITIES_SUCCESS,
  SERIES_SUCCESS,
  CARD_ADD_LOADING,
  CARD_ADD_FAIL,
  CARD_ADD_SUCCESS,
  CardAddType,
} from '../types';

export interface stateInterface {
  cards: CardType[];
  loading: boolean;
  search: any;
  teams: TeamsType[];
  positions: PositionsType[];
  rarities: RaritiesType[];
  series: SeriesType[];
  cardAdd: string;
}

const initialState: stateInterface = {
  loading: false,
  cards: [],
  search: '',
  teams: [],
  positions: [],
  rarities: [],
  series: [],
  cardAdd: '',
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
    case CARD_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        cardAdd: action.payload,
      };
    case CARD_ADD_FAIL:
      return {
        ...state,
        loading: false,
        cardAdd: action.payload,
      };

    default:
      return state;
  }
}
