import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string []= ['spiderman', 'superman', 'batman', 'hulk', 'thor'];
  public deletedHero?:string;

  removeLastHero():void{
   this.deletedHero= this.heroNames.pop();

  }

}
