import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchoneRoundTripComponent } from './searchone-round-trip.component';

describe('SearchoneRoundTripComponent', () => {
  let component: SearchoneRoundTripComponent;
  let fixture: ComponentFixture<SearchoneRoundTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchoneRoundTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchoneRoundTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
