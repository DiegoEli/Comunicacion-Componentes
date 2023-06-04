import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit{
  listPersona: Persona[] = [
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', asignatura: 'ciencias', nota1: 10, nota2: 10, promedio: 10, estado: "Aprobado" },
    { cedula: '0919922252', nombre: 'Anna', apellido: 'Perez', asignatura: 'ciencias', nota1: 7, nota2: 5, promedio: 6, estado: "Reprobado" },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', asignatura: 'ciencias', nota1: 8, nota2: 4, promedio: 6, estado: "Reprobado" },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', asignatura: 'ciencias', nota1: 8, nota2: 8, promedio: 8, estado: "Aprobado" },
    { cedula: '0919922252', nombre: 'Juan', apellido: 'Perez', asignatura: 'ciencias', nota1: 7, nota2: 7, promedio: 7, estado: "Aprobado" },
  ]

  radioButtonSeleccionado = 'Todos';
  constructor() {
  }

  ngOnInit(): void {

  }

  obtenerTotalPersonas(): number {
    return this.listPersona.length;
  }

  obtenerTotalAprobados(): number {
    return this.listPersona.filter(list => list.estado === "Aprobado").length;
  }

  obtenerTotalReprobados(): number {
    return this.listPersona.filter(list => list.estado === "Reprobado").length;
  }

  // calcularPromedioGeneral(): number {
  //   const promediosIndividuales = this.listPersona.map(persona => persona.promedio);
  //   const totalPersonas = promediosIndividuales.length;
  //   const sumaPromedios = promediosIndividuales.reduce((a, b) => a + b, 0);
  //   const promedioGeneral = sumaPromedios / totalPersonas;
  //   return parseFloat(promedioGeneral.toFixed(2));
  // }

  personaCountRadioButtonChange(radioButtonSelec: string): void {
    this.radioButtonSeleccionado = radioButtonSelec;
    }  
}
