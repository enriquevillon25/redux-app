import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from "@ngrx/store";
import { increment, decrement } from './contador/contador.action';
import {AppState} from '../app.reducers';
interface AppState{
  contador:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contador: number =  0;
  title = 'redux-app';
  constructor(private store:Store<AppState>){

    // this.store.select('contador').subscribe(state =>{

    //   console.log(state);
    this.store.select('contador').subscribe(state=>{
      console.log(state);
      this.contador = state;
    })

    // })
  }
  incrementar(){
    this.store.dispatch(increment());
  }

  decrementar(){
    this.store.dispatch(decrement())
  }
}
