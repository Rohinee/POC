import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionCardComponent } from './fashion-card.component';

describe('FashionCardComponent', () => {
  let component: FashionCardComponent;
  let fixture: ComponentFixture<FashionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
