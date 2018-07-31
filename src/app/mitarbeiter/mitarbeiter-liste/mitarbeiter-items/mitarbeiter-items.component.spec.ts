import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterItemsComponent } from './mitarbeiter-items.component';

describe('MitarbeiterItemsComponent', () => {
  let component: MitarbeiterItemsComponent;
  let fixture: ComponentFixture<MitarbeiterItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitarbeiterItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitarbeiterItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
