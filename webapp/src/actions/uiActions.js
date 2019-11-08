import { uiTypes } from './types';

export const loadingUI = () => ({ type: uiTypes.LOADING_UI });
export const loadingUIFinished = () => ({ type: uiTypes.LOADING_UI_FINISHED });

export const clearError = errType => ({
  type: uiTypes.CLEAR_ERROR,
  payload: errType,
});

export const clearErrors = () => ({ type: uiTypes.CLEAR_ERRORS });

export const setError = error => ({
  type: uiTypes.SET_ERROR,
  payload: error,
});
