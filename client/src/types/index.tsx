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
export const CARD_ADD_LOADING = 'CARD_ADD_LOADING';
export const CARD_ADD_FAIL = 'CARD_ADD_FAIL';
export const CARD_ADD_SUCCESS = 'CARD_ADD_SUCCESS';
export const CARD_EDIT_SUCCESS = 'CARD_EDIT_SUCCESS';
export const CARD_DELETE_START = 'CARD_DELETE_START';
export const CARD_DELETE_FAIL = 'CARD_DELETE_FAIL';
export const CARD_DELETE_SUCCESS = 'CARD_DELETE_SUCCESS';

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

export type CardAddType = {
  nombre: string;
  apellido: string;
  foto: string;
  id_equipos: number;
  id_posiciones: number;
  id_rarezas: number;
  id_series: number;
};

export type CardEditType = {
  id: number;
  nombre: string;
  apellido: string;
  foto: string;
  id_equipos: number;
  id_posiciones: number;
  id_rarezas: number;
  id_series: number;
};

export type SearchType = {
  search: string;
};

export type TeamsType = {
  id: number;
  equipo: string;
};

export type PositionsType = {
  id: number;

  posicion: string;
};

export type RaritiesType = {
  id: number;
  rareza: string;
};

export type SeriesType = {
  id: number;
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

export interface CardAddLoading {
  type: typeof CARD_ADD_LOADING;
}

export interface CardAddFail {
  type: typeof CARD_ADD_FAIL;
  payload: any;
}

export interface CardAddSuccess {
  type: typeof CARD_ADD_SUCCESS;
  payload: string;
}

export interface CardEditSuccess {
  type: typeof CARD_EDIT_SUCCESS;
  payload: string;
}

export interface CardDeleteFail {
  type: typeof CARD_DELETE_FAIL;
  payload: any;
}

export interface CardDeleteStart {
  type: typeof CARD_DELETE_START;
}

export interface CardDeleteSuccess {
  type: typeof CARD_DELETE_SUCCESS;
  payload: any;
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
  | SeriesSucces
  | CardAddLoading
  | CardAddFail
  | CardAddSuccess
  | CardEditSuccess
  | CardDeleteFail
  | CardDeleteStart
  | CardDeleteSuccess;
