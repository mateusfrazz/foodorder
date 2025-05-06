import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'categorias',component:CategoriaComponent},
    {path:'categorias/:id',component:CategoriaComponent}
];
