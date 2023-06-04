import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioPersonaComponent } from './promedio-persona.component';

describe('PromedioPersonaComponent', () => {
  let component: PromedioPersonaComponent;
  let fixture: ComponentFixture<PromedioPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromedioPersonaComponent]
    });
    fixture = TestBed.createComponent(PromedioPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
