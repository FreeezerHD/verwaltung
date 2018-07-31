import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mitarbeiter} from "../../mitarbeiter.model";

@Component({
  selector: 'app-mitarbeiter-items',
  templateUrl: './mitarbeiter-items.component.html',
  styleUrls: ['./mitarbeiter-items.component.scss']
})
export class MitarbeiterItemsComponent implements OnInit {
  @Input() user: Mitarbeiter;
  @Output() memberSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.memberSelected.emit();

  }

}
