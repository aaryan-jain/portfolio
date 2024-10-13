import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameDisplayComponent } from './components/name-display/name-display.component';
import { ConsoleWindowComponent } from "./components/console-window/console-window.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { HeartComponent } from "./components/heart/heart.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NameDisplayComponent,
    ConsoleWindowComponent,
    ProjectsComponent,
    HeartComponent,
    ContactComponent,
    NavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Aaryan Jain';
}
