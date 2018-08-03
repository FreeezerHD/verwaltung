// import { Component, OnInit, Input } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Mitarbeiter} from '../mitarbeiter.model';
import {MitarbeiterService} from '../mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter-details',
  templateUrl: './mitarbeiter-details.component.html',
  styleUrls: ['./mitarbeiter-details.component.scss']
})
export class MitarbeiterDetailsComponent implements OnInit {
  // @Input() user: Mitarbeiter;
  user: Mitarbeiter;
  id: number;

  constructor(private mitarbeiterService: MitarbeiterService, private route: ActivatedRoute) {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.user = this.mitarbeiterService.getMember(this.id);
        }
      );
  }

  ngOnInit() {
  }

  addNewProjects() {

  }

}
