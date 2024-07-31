import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent: ()=> import('./features/feature-home/pages/page-home/page-home.component').then(m => m.PageHomeComponent)
    }
];