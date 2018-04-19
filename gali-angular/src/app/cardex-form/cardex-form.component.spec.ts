import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexFormComponent } from './cardex-form.component';

describe('CardexFormComponent', () => {
  let component: CardexFormComponent;
  let fixture: ComponentFixture<CardexFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
