import { createAction,props  } from '@ngrx/store';


export const increment  = createAction('[Counter Component] Incrementar');
export const decrement = createAction('[Counter Component] Decrementar');
export const reset = createAction('[Counter Component] Resetear');
export const mult = createAction('[Counter Component] Multiplicar', props<{numero:number}>() )
export const div = createAction('[Counter Component] Dividir', props<{numero:number}>())
// export class IncrementarAction implements Action {
//     readonly type = increment;
// }


// export class DecrementarAction implements Action {
//     readonly type = decrement;
// }
