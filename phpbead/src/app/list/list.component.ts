import { Component, OnInit } from '@angular/core';
import {BeadservService} from '../beadserv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public service: BeadservService
  ) { }

  ngOnInit(): void { // az oldal megnyitásakor lekéri az adatokat az apiból és hozzárendeli a MyAdat tipusú változóhoz
    if (this.service.adatok.length === 0) {
      this.service.fetch().subscribe(
        (data: any) => this.service.adatok = data.results, // az api-ból csak a results-ot kérjük le
        error => console.log(error),
        ( ) => console.log('Complete'));
    }
  }

  // azt az adatot amelyiknek a törlés gomjára nyomunk összehasonlítja az összes bentlévő adattal
  // és ha megtalálja elmenti az indexét és utána az ezzel az indexxel rendelező elemet törli ki
  delete(element: any): void{
    this.service.adatok.forEach((value, index) => {
      if (value === element) {
        this.service.adatok.splice(index, 1);
      }
    });
  }

  // a törléshez hasonlóan, megkeressük, hogy melyik indexű elemet kívánja szerkeszteni a felhasználó
  // és azt az indexet elmentjük miközben átirányít minket a form page-re és betölti azt az adatot amelyiket szerkeszteni akarjuk
  edit(element: any): void{
    this.service.adatok.forEach((value, index) => {
      if (value === element) {
        this.service.editindex = index;
      }
    });
  }
}
