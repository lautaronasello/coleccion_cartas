export const START_CARDS_DOWNLOAD = 'START_CARDS_DOWNLOAD';
export const CARD_LOADING = 'CARD_LOADING';
export const SELECTS_LOADING = 'SELECTS_LOADING';
export const SELECTS_FAIL = 'SELECTS_FAIL';
export const TEAM_SUCCESS = 'TEAM_SUCCESS';
export const POSITION_SUCCESS = 'POSITION_SUCCESS';
export const RARITIES_SUCCESS = 'RARITIES_SUCCESS';
export const SERIES_SUCCESS = 'SERIES_SUCCESS';
export const CARD_FAIL = 'CARD_FAIL';
export const CARD_SUCCESS = 'CARD_SUCCESS';
export const CARD_SEARCH_SUCCESS = 'CARD_SEARCH_SUCCESS';
export const CARD_SEARCH_LOADING = 'CARD_SEARCH_LOADING';
export const CARD_SEARCH_FAIL = 'CARD_SEARCH_FAIL';

export type CardType = {
  apellido: string;
  equipo: string;
  foto: string;
  id: number;
  nombre: string;
  posicion: string;
  rareza: string;
  serie: string;
};

export type SearchType = {
  search: string;
};

export type TeamsType = {
  equipo: string;
};

export type PositionsType = {
  posicion: string;
};

export type RaritiesType = {
  rareza: string;
};

export type SeriesType = {
  serie: string;
};

export interface CardLoading {
  type: typeof CARD_LOADING;
}

export interface CardFail {
  type: typeof CARD_FAIL;
}

export interface CardSuccess {
  type: typeof CARD_SUCCESS;
  payload: CardType[];
}
export interface CardSearchLoading {
  type: typeof CARD_SEARCH_LOADING;
}

export interface CardSearchFail {
  type: typeof CARD_SEARCH_FAIL;
}

export interface CardSearchSuccess {
  type: typeof CARD_SEARCH_SUCCESS;
  payload: SearchType;
}

export interface SelectsLoading {
  type: typeof SELECTS_LOADING;
}

export interface SelectsFail {
  type: typeof SELECTS_FAIL;
}

export interface TeamSuccess {
  type: typeof TEAM_SUCCESS;
  payload: TeamsType[];
}
export interface PositionsSuccess {
  type: typeof POSITION_SUCCESS;
  payload: PositionsType[];
}
export interface RaritiesSuccess {
  type: typeof RARITIES_SUCCESS;
  payload: RaritiesType[];
}
export interface SeriesSucces {
  type: typeof SERIES_SUCCESS;
  payload: SeriesType[];
}

export type CardDispatchTypes =
  | CardLoading
  | CardFail
  | CardSuccess
  | CardSearchLoading
  | CardSearchFail
  | CardSearchSuccess
  | SelectsLoading
  | SelectsFail
  | TeamSuccess
  | PositionsSuccess
  | RaritiesSuccess
  | SeriesSucces;
