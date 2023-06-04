import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPersonaComponent } from './components/registrar-persona/registrar-persona.component';
import { EditarPersonaComponent } from './components/editar-persona/editar-persona.component';
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';
import { PromedioPersonaComponent } from './components/promedio-persona/promedio-persona.component';

const routes: Routes = [
  {path:'', redirectTo: 'listPersonas', pathMatch: 'full'},
  {path:'listPersonas', component: ListadoPersonaComponent},
  {path:'registrarPersona', component: RegistrarPersonaComponent},
  {path:'editarPersona/:id', component: EditarPersonaComponent},
  {path: 'promedioPersona', component: PromedioPersonaComponent},
  {path:'**', redirectTo: 'listPersonas', pathMatch: 'full'},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
