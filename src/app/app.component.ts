import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  contador: number =  0;
  title = 'redux-app';
  constructor(private store:Store<any>){
    
    this.store.subscribe(state =>{
      this.contador = state.contador;
    })
  }
  incrementar(){
    const accion: Action ={
      type:'INCREMENTAR'
    }
    this.store.dispatch(accion);
  } 

  decrementar(){
    const accion: Action = {
      type:'DECREMENTAR'
    };
    this.store.dispatch(accion);
  }
}
