import { Component, OnInit, Input } from '@angular/core';
import {Mitarbeiter} from "../mitarbeiter.model";

@Component({
  selector: 'app-mitarbeiter-details',
  templateUrl: './mitarbeiter-details.component.html',
  styleUrls: ['./mitarbeiter-details.component.scss']
})
export class MitarbeiterDetailsComponent implements OnInit {
  @Input() user: Mitarbeiter;
  constructor() { }

  ngOnInit() {
  }

  addNewProjects() {

  }

}
