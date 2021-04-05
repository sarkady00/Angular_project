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
    this.editform = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      species: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  adat = new MyAdat();

  ngOnInit(): void {
    if (this.service.editindex > -1){
      this.adat = this.service.adatok[this.service.editindex];
    }
  }

  save(): void{
    if (this.service.editindex > -1){
      this.service.editindex = -1;
      this.adat = new MyAdat();
    }
    else{
      this.service.adatok.push(this.adat);
      this.adat = new MyAdat();
    }
    this.route.navigate(['list']);
  }
}
