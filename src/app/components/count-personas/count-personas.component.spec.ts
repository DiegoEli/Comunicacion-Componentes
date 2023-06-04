import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPersonasComponent } from './count-personas.component';

describe('CountPersonasComponent', () => {
  let component: CountPersonasComponent;
  let fixture: ComponentFixture<CountPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountPersonasComponent]
    });
    fixture = TestBed.createComponent(CountPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
