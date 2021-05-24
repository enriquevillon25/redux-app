import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset, mult,div } from './contador.action';

// export function contadorReducer(state:number=10,action:Action){
//     switch (action.type) {
//         case increment.type:
//             return state +1;

//         case decrement.type:
//             return state -1;
//         default:
//             return state;
//     }
// }

export const initialState=0;

const _counterReducer = createReducer(initialState,
  on(increment,state =>state +1),
  on(decrement,state => state -1),
  on(reset,state => initialState),
  on(mult,(state,{numero})=> state*numero),
  on(div,(state,{numero})=> state/numero),
)

export function contadorReducer(state:any,action:Action){
  return _counterReducer(state,action);
}
