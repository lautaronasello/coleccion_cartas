import {
  CardDispatchTypes,
  CARD_FAIL,
  CARD_LOADING,
  CARD_SUCCESS,
  CardType,
} from '../types';

export interface stateInterface {
  cards: CardType[];
  loading: boolean;
}

const initialState: stateInterface = {
  loading: false,
  cards: [],
};

export default function Reducer(
  state: stateInterface = initialState,
  action: CardDispatchTypes
): stateInterface {
  switch (action.type) {
    case CARD_FAIL:
      return {
        ...state,
        loading: true,
      };
    case CARD_LOADING:
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

    default:
      return state;
  }
}
