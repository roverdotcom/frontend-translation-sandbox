import { Action, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { t } from '@lingui/macro';

// WARNING: in this webapp, this would not be imported directly. Don't use this i18n but use one inside thunk
import donotusei18n from '@rover/utilities/translation'

const INITIAL_STATE = {
  petList: ['Woodie', 'Kitty'],
  numWalk: 0,
  lang: 'en-us',
};

export type StateType = typeof INITIAL_STATE;

const SUBMIT: 'submit' = 'submit';
const UPDATE_NUM_WALK: 'updateNumWalk' = 'updateNumWalk';
const UPDATE_PET_LIST: 'updatePetList' = 'updatePetList';
const UPDATE_LANG: 'updateLang' = 'updateLang';

export function updateNumWalkAction(num: number) {
  return {
    type: UPDATE_NUM_WALK,
    payload: num,
  };
}

export function updatePetListAction(pets: string[]) {
  return {
    type: UPDATE_PET_LIST,
    payload: pets,
  };
}

export function updateLangAction(lang: string) {
  return {
    type: UPDATE_LANG,
    payload: lang,
  };
}

// TODO update type
export function submitAction(): ThunkAction<
  Promise<any>,
  StateType,
  void,
  Action
> {
  return (dispatch, getState) => {
    return Promise.resolve(
      setTimeout(() => {
        const state = getState();
        alert(
          `Submitted: ${state.numWalk} walks for ${state.petList.join(', ')}`
        );
      })
    );
  };
}

export type UpdateNumWalkActionType = ReturnType<typeof updateNumWalkAction>;
export type updatePetListActionType = ReturnType<typeof updatePetListAction>;
export type updateLangActionType = ReturnType<typeof updateLangAction>;
export type ActionTypes =
  | UpdateNumWalkActionType
  | updatePetListActionType
  | updateLangActionType;

export function reducer(state = INITIAL_STATE, action: ActionTypes): StateType {
  switch (action.type) {
    case UPDATE_NUM_WALK:
      return {
        ...state,
        numWalk: action.payload,
      };
    case UPDATE_PET_LIST:
      return {
        ...state,
        petList: action.payload,
      };
    case UPDATE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({i18n: donotusei18n}))));
export default store;
