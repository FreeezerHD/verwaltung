import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterAnlegenComponent } from './mitarbeiter-anlegen.component';

describe('MitarbeiterAnlegenComponent', () => {
  let component: MitarbeiterAnlegenComponent;
  let fixture: ComponentFixture<MitarbeiterAnlegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterAnlegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
