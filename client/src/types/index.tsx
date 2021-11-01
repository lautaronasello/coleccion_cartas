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

export interface CardInterface {
  id: number;
  nombre: string;
  apellido: string;
  foto: string;
}

export interface RarityInterface {
  id: number;
  rareza: string;
}

export interface PositionInterface {
  id: number;
  posicion: string;
}

export interface TeamInterface {
  id: number;
  equipo: string;
}

export interface SeriesInterface {
  id: number;
  serie: string;
}
export type CardType = {
  cartas: CardInterface;
  rarezas: RarityInterface;
  posiciones: PositionInterface;
  equipos: TeamInterface;
  series: SeriesInterface;
};

export type CardEditType = {
  id?: number;
  nombre: string;
  apellido: string;
  foto: string;
  id_equipos: number;
  id_posiciones: number;
  id_rarezas: number;
  id_series: number;
};

export type SearchType = {
  search: CardType;
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
  payload: CardType[];
}

export interface SelectsLoading {
  type: typeof SELECTS_LOADING;
}

export interface SelectsFail {
  type: typeof SELECTS_FAIL;
}

export interface TeamSuccess {
  type: typeof TEAM_SUCCESS;
  payload: TeamInterface[];
}
export interface PositionsSuccess {
  type: typeof POSITION_SUCCESS;
  payload: PositionInterface[];
}
export interface RaritiesSuccess {
  type: typeof RARITIES_SUCCESS;
  payload: RarityInterface[];
}
export interface SeriesSucces {
  type: typeof SERIES_SUCCESS;
  payload: SeriesInterface[];
}

export interface CardAddLoading {
  type: typeof CARD_ADD_LOADING;
}

export interface CardAddFail {
  type: typeof CARD_ADD_FAIL;
  payload: string;
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
  payload: string;
}

export interface CardDeleteStart {
  type: typeof CARD_DELETE_START;
}

export interface CardDeleteSuccess {
  type: typeof CARD_DELETE_SUCCESS;
  payload: string;
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
