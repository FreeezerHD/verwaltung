import { Component, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-urlaubsplanung',
  templateUrl: './urlaubsplanung.component.html',
  styleUrls: ['./urlaubsplanung.component.scss']
})
export class UrlaubsplanungComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    flatpickr('#calendar', {
      wrap: true,
      dateFormat: 'd-m-Y',
      mode: 'range',
      weekNumbers: true,
    });
  }

}

