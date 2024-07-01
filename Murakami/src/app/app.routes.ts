import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'home', component: HomeComponent},
];


