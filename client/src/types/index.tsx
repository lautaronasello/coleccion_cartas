export const START_CARDS_DOWNLOAD = 'START_CARDS_DOWNLOAD';
export const CARD_LOADING = 'CARD_LOADING';
export const CARD_FAIL = 'CARD_FAIL';
export const CARD_SUCCESS = 'CARD_SUCCESS';

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

export type CardDispatchTypes = CardLoading | CardFail | CardSuccess;
