import {Mitarbeiter} from './mitarbeiter.model';

export class MitarbeiterService {
  private members: Mitarbeiter[] = [
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
      'UX',
      'IT-Department',
      'johanna.doe@example.com',
      '555-555-555',
      'Design Design UX UX again again and again ... another Project .... Yep another one',
      'another Project .... Yep another one'
    )
  ];

  getMitarbeiter() {
    return this.members.slice();
  }

  getMember(index: number) {
    return this.members[index];
  }

}
