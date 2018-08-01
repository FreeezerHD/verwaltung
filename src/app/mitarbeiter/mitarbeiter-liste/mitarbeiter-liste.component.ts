import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mitarbeiter} from '../mitarbeiter.model';

@Component({
  selector: 'app-mitarbeiter-liste',
  templateUrl: './mitarbeiter-liste.component.html',
  styleUrls: ['./mitarbeiter-liste.component.scss']
})
export class MitarbeiterListeComponent implements OnInit {
  @Output() membersWasSelected = new EventEmitter<Mitarbeiter>();
  members: Mitarbeiter[] = [
    new Mitarbeiter(
      '../../../assets/avatar/avatar2.png',
      'John',
      'Doe',
      'CTO',
      'IT-Department',
      'john.doe@example.com',
      '555-555-555',
      'This is a longer card with supporting text below as a' +
      'natural lead-in to additional content. This content is a little bit longer.',
      'Lorem dawg bling bling crazy amet, doggy adipiscing sure. Nullizzle sapien velizzle,' +
      'bizzle fo shizzle my nizzle, suscipizzle ma nizzle,'
    ),
    new Mitarbeiter(
      '../../../assets/avatar/avatar5.png',
      'Johanna',
      'Doe',
      'CTO´in',
      'IT-Department',
      'johanna.doe@example.com',
      '555-555-555',
      'again again and again ... another Project .... Yep another one',
      'another Project .... Yep another one'
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
