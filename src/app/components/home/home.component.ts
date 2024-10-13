import { Component } from '@angular/core';
import { ConsoleWindowComponent } from '../console-window/console-window.component';
import { ContactComponent } from '../contact/contact.component';
import { HeartComponent } from '../heart/heart.component';
import { NameDisplayComponent } from '../name-display/name-display.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NameDisplayComponent,
    ConsoleWindowComponent,
    ProjectsComponent,
    HeartComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
