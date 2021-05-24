import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as actions from '../contador.action';
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  contador :number = 0;
  // @Output() cambioContador = new EventEmitter<number>();
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(response=>{
      console.log(response)
      this.contador = response;
    })
  }

  dividir(){
    this.contador  /=2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.div({numero:2}));
  }

  multiplicar(){
    this.contador *=2;
    this.store.dispatch(actions.mult({numero:2}));
    // this.cambioContador.emit(this.contador);
  }

}
