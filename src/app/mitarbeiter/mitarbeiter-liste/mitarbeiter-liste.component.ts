import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mitarbeiter} from "../mitarbeiter.model";

@Component({
  selector: 'app-mitarbeiter-liste',
  templateUrl: './mitarbeiter-liste.component.html',
  styleUrls: ['./mitarbeiter-liste.component.scss']
})
export class MitarbeiterListeComponent implements OnInit {
  @Output() membersWasSelected = new EventEmitter<Mitarbeiter>();
  members: Mitarbeiter[] = [
    new Mitarbeiter(
      'John',
      'Doe',
      'CTO',
      'IT-Department',
      'john.doe@example.com',
      '555-555-555',
      'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      'Lorem dawg bling bling crazy amet, doggy adipiscing sure. Nullizzle sapien velizzle, bizzle fo shizzle my nizzle, suscipizzle ma nizzle, gravida vel, shizzlin dizzle. Fo shizzle egizzle tortizzle. Gangsta erizzle..'
    )
  ];

  ngOnInit() {
  }


  addNewMember(event) {
    this.members.push(event);
  }

  onMemberSelected(user: Mitarbeiter) {
    this.membersWasSelected.emit(user);
  }

}
