import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Mitarbeiter} from "../mitarbeiter.model";

@Component({
  selector: 'app-mitarbeiter-anlegen',
  templateUrl: './mitarbeiter-anlegen.component.html',
  styleUrls: ['./mitarbeiter-anlegen.component.scss']
})
export class MitarbeiterAnlegenComponent implements OnInit {

  @Output() onAddNewMember: EventEmitter<Mitarbeiter> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addNewMember() {
    let firstName = (<any>(document.querySelector('#inputVorname'))).value;
    let lastName = (<any>(document.querySelector('#inputNachname'))).value;
    let position = (<any>(document.querySelector('#inputPosition'))).value;
    let department = (<any>(document.querySelector('#inputDepartment'))).value;
    let email = (<any>(document.querySelector('#inputEmail'))).value;
    let phone = (<any>(document.querySelector('#inputPhone'))).value;
    let aboutMember = (<any>(document.querySelector('#inputAboutMember'))).value;
    let projects = (<any>(document.querySelector('#inputAboutProjects'))).value;
    this.onAddNewMember.emit(new Mitarbeiter(firstName, lastName, position, department, email, phone, aboutMember, projects))
  }

}
