import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() nombre: string;
  @Input() apellido: string;

  show: boolean;

  constructor() {
    this.show = true;
  }

  ngOnInit() {
  }

  onShowHiden() {
    this.show = !this.show;
  }

}
