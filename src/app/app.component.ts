import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameDisplayComponent } from './components/name-display/name-display.component';
import { ConsoleWindowComponent } from "./components/console-window/console-window.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameDisplayComponent, ConsoleWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
