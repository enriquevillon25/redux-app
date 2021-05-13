import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input() contador :number = 0;
  @Output() cambioContador = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  dividir(){
    this.contador  /=2;
    this.cambioContador.emit(this.contador);
  }

  multiplicar(){
    this.contador *=2;

    this.cambioContador.emit(this.contador);
  }

}