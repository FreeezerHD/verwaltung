export class Mitarbeiter {
  public firstName: string;
  public lastName: string;
  public position: string;
  public department: string;
  public email: string;
  public phone: string;
  public aboutMember: string;
  public projects: string;

  constructor(firstName: string, lastName: string, position: string,  department: string, email: string, phone: string,  aboutMember: string, projects: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.department = department;
    this.email = email;
    this.phone = phone;
    this.aboutMember = aboutMember;
    this.projects = projects;
  }
}
