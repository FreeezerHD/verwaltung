import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlaubsplanungComponent } from './urlaubsplanung.component';

describe('UrlaubsplanungComponent', () => {
  let component: UrlaubsplanungComponent;
  let fixture: ComponentFixture<UrlaubsplanungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlaubsplanungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlaubsplanungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
