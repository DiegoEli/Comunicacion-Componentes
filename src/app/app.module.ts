import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { RegistrarPersonaComponent } from './components/registrar-persona/registrar-persona.component';
import { EditarPersonaComponent } from './components/editar-persona/editar-persona.component';
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';
import { PromedioPersonaComponent } from './components/promedio-persona/promedio-persona.component';
import { CountPersonasComponent } from './components/count-personas/count-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    RegistrarPersonaComponent,
    EditarPersonaComponent,
    ListadoPersonaComponent,
    PromedioPersonaComponent,
    CountPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
