import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterDetailsComponent } from './mitarbeiter-details.component';

describe('MitarbeiterDetailsComponent', () => {
  let component: MitarbeiterDetailsComponent;
  let fixture: ComponentFixture<MitarbeiterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
