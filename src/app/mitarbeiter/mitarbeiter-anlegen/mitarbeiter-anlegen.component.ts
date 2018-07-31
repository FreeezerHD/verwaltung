import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Mitarbeiter} from '../mitarbeiter.model';

@Component({
  selector: 'app-mitarbeiter-anlegen',
  templateUrl: './mitarbeiter-anlegen.component.html',
  styleUrls: ['./mitarbeiter-anlegen.component.scss']
})
export class MitarbeiterAnlegenComponent implements OnInit {

  @Output() AddNewMember: EventEmitter<Mitarbeiter> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addNewMember() {
    const imagePath = (<any>(document.querySelector('#inputImagePath'))).value;
    const firstName = (<any>(document.querySelector('#inputVorname'))).value;
    const lastName = (<any>(document.querySelector('#inputNachname'))).value;
    const position = (<any>(document.querySelector('#inputPosition'))).value;
    const department = (<any>(document.querySelector('#inputDepartment'))).value;
    const email = (<any>(document.querySelector('#inputEmail'))).value;
    const phone = (<any>(document.querySelector('#inputPhone'))).value;
    const aboutMember = (<any>(document.querySelector('#inputAboutMember'))).value;
    const projects = (<any>(document.querySelector('#inputAboutProjects'))).value;
    this.AddNewMember.emit(new Mitarbeiter(imagePath, firstName, lastName, position, department, email, phone, aboutMember, projects));
  }

}
