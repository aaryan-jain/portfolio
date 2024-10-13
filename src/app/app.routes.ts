import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [{
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
},{
    path: '',
    component: HomeComponent,
}, {
    path: 'about',
    component: AboutComponent
}, {
    path: '**',
    component: NotfoundComponent
}];
