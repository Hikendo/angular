import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  title :string = 'Espacio para ejercicios';
  counter: number = 10;
  increaseCounter():void{
    this.counter++;

  }
  decreaseCounter():void{
    this.counter--;

  }
  resetCounter():void{
    this.counter=10;
  }
}
