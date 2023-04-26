import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardYearComponent } from './card-year.component';

describe('CardYearComponent', () => {
  let component: CardYearComponent;
  let fixture: ComponentFixture<CardYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
