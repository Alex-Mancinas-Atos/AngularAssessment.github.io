import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryByNameComponent } from './country-by-name.component';

describe('CountryByNameComponent', () => {
  let component: CountryByNameComponent;
  let fixture: ComponentFixture<CountryByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
