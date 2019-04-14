import { Action, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'


export interface StateType {
  petList: string[],
  numWalk: number
}

const SUBMIT = 'submit';
const UPDATE_NUM_WALK = "updateNumWalk";

export interface SubmitActionType extends Action {
  type: typeof SUBMIT;
  payload: number,
}

export interface UpdateNumWalkType extends Action {
  type: typeof UPDATE_NUM_WALK;
  payload: number
}

export type ActionTypes = SubmitActionType | UpdateNumWalkType;


export function updateNumWalkAction(num: number): UpdateNumWalkType {
  return {
    type: UPDATE_NUM_WALK,
    payload: num
  }
}

// TODO update type
export function submitAction(num: number): ThunkAction<Promise<ActionTypes>, number, null, ActionTypes> {
  return (dispatch: ThunkDispatch<any, null, ActionTypes>) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(`Submitted: ${num} walks`);
        resolve(dispatch(updateNumWalkAction(num)));
      });
    })
  };
}


const INITIAL_STATE: StateType = {
  petList: ["Woodie", "Kitty"],
  numWalk: 0
}

export function reducer(state=INITIAL_STATE, action: ActionTypes): StateType {
  switch(action.type) {
    case UPDATE_NUM_WALK:
      return {
        ...state,
        numWalk: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;






