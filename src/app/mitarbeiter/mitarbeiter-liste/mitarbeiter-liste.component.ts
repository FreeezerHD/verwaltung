import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mitarbeiter} from '../mitarbeiter.model';
import {MitarbeiterService} from '../mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter-liste',
  templateUrl: './mitarbeiter-liste.component.html',
  styleUrls: ['./mitarbeiter-liste.component.scss']
})
export class MitarbeiterListeComponent implements OnInit {
  @Output() membersWasSelected = new EventEmitter<Mitarbeiter>();
  members: Mitarbeiter[];

  constructor(private mitarbeiter: MitarbeiterService) {
  }

  ngOnInit() {
    this.members = this.mitarbeiter.getMitarbeiter();
  }

  addNewMember(event) {
    this.members.push(event);
  }

  onMemberSelected(user: Mitarbeiter) {
    this.membersWasSelected.emit(user);
  }

}
