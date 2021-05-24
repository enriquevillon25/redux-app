import { Component, OnInit } from '@angular/core';
import { reset, div } from '../contador.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.action';
@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  contador: number = 0;
  constructor(private store:Store<AppState>) {
    this.store.select('contador').subscribe(response =>{
      this.contador = response;
    })
  }

  ngOnInit(): void {
  }
  reset(){
    this.store.dispatch(actions.reset());
  }
}
