import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name: string= "Marvel"
  public age: number= 47;

/// usar un getter
  get capitalizeName():string{
    return this.name.toUpperCase();

  }
  ///usar un @Method()
  getLastName():string {
    return "Disney"
  }
  changeHero():string{
    return this.name="Superman";

  }
  changeAge():number{
    return this.age=37;
  }
  resetForm():void{
    this.name= "Marvel"
    this.age= 47;
  }
}
