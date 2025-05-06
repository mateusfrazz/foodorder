import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'Categoria',component:CategoriaComponent},
    {path:'categorias/:id',component:CategoriaComponent}
];
