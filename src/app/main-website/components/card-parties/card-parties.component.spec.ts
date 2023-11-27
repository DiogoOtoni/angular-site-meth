import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPartiesComponent } from './card-parties.component';

describe('CardPartiesComponent', () => {
  let component: CardPartiesComponent;
  let fixture: ComponentFixture<CardPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPartiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
