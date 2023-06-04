import { Component } from '@angular/core';
import { Persona } from './models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taller7-4';

  listPersonas: Persona[] = [];


  agregarPersona(persona: Persona) {
    this.listPersonas.push(persona);
    console.log(this.listPersonas);
  }

}
