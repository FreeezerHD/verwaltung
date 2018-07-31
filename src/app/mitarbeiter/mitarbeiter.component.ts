import { Component, OnInit } from '@angular/core';
import {Mitarbeiter} from "./mitarbeiter.model";

@Component({
  selector: 'app-mitarbeiter',
  templateUrl: './mitarbeiter.component.html',
  styleUrls: ['./mitarbeiter.component.scss']
})
export class MitarbeiterComponent implements OnInit {
  selectedMember: Mitarbeiter;

  constructor() { }

  ngOnInit() {
  }

}
