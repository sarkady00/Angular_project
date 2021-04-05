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

  ngOnInit(): void {
    if (this.service.adatok.length === 0) {
      this.service.fetch().subscribe(
        (data: any) => this.service.adatok = data.results,
        error => console.log(error),
        ( ) => console.log('Complete'));
    }
  }

  delete(element: any): void{
    this.service.adatok.forEach((value, index) => {
      if (value === element) {
        this.service.adatok.splice(index, 1);
      }
    });
  }

  edit(element: any): void{
    this.service.adatok.forEach((value, index) => {
      if (value === element) {
        this.service.editindex = index;
      }
    });
  }
}
