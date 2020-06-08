//Imports Necesarios
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EditComponent } from './components/edit/edit.component';


//Definir las rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', component: LoginComponent},    
    {path: 'register', component: RegisterComponent},
    {path: 'equipos/listar', component: EquiposComponent},
    {path: 'equipos/consultar', component: EditComponent},
    {path: '**', component: ErrorComponent}
];


//Exportar configuracion
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
