import { Component, OnInit } from '@angular/core';
import {Mitarbeiter} from './mitarbeiter.model';
import {MitarbeiterService} from './mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter',
  templateUrl: './mitarbeiter.component.html',
  styleUrls: ['./mitarbeiter.component.scss'],
  providers: [MitarbeiterService]
})
export class MitarbeiterComponent implements OnInit {
  selectedMember: Mitarbeiter;

  constructor() { }

  ngOnInit() {
  }

}
