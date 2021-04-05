import { Component, OnInit } from '@angular/core';
import { BeadservService } from '../beadserv.service';
import { MyAdat } from '../adat.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  editform: FormGroup;

  constructor(
    private service: BeadservService,
    private readonly  fb: FormBuilder,
    private route: Router
  ) {
    this.editform = this.fb.group({ // itt is saját formgroupot hozunk létre a validációk használatához
      name: ['', Validators.required], // nem lehet üres egyik sem
      status: ['', Validators.required],
      species: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  adat = new MyAdat();

  // ha van igény szerkesztésre, akkor az editindex
  // 0 vagy annál nagyobb lesz (az adott elem indexe) és betöltjük a megfelelő adatokat előre
  // egyébként meg betölti a formot üresen
  ngOnInit(): void {
    if (this.service.editindex > -1){
      this.adat = this.service.adatok[this.service.editindex];
    }
  }

  // ha szerkesztést kezdeményeztünk akkor nem tesszük hozzá az adatsor végére az új adatot és visszaállítjuk az editindexet -1 re
  // hogy a legközelebb ne töltsön be semmit előre, csak ha ismét szerkeszteni kíván a felhasználó
  save(): void{
    if (this.service.editindex > -1){
      this.service.editindex = -1;
      this.adat = new MyAdat();
    }
    else{ // ha új adatot akarunk hozzáadni, akkor csak az adatsorunk végére tesszük
      this.service.adatok.push(this.adat);
      this.adat = new MyAdat();
    }
    this.route.navigate(['list']); // minden esetben visszavisz minket a list page-re
  }
}
