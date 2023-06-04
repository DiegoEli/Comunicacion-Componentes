import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPersonaComponent } from './registrar-persona.component';

describe('PersonaComponent', () => {
  let component: RegistrarPersonaComponent;
  let fixture: ComponentFixture<RegistrarPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPersonaComponent]
    });
    fixture = TestBed.createComponent(RegistrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
