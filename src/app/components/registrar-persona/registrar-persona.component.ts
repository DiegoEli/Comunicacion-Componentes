import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';


@Component({
  selector: 'app-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent {

  listPersona: Persona[] = [];
  form: FormGroup;
 

  agregarPersona() {
    //tomo los datos del formulario
    const persona: Persona = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      asignatura: this.form.value.asignatura,
      nota1: this.form.value.nota1,
      nota2: this.form.value.nota2,
      promedio: this.form.value.promedio,
      estado: this.form.value.estado
    }
    //agrego a la lista
    this.listPersona.push(persona);
    //limpiar el formulario
    this.form.reset();
  }
  
  constructor(private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      asignatura: ['', Validators.required],
      nota1: ['', Validators.required],
      nota2: ['', Validators.required],
      promedio: ['', Validators.required],
    })
  }

  
}
