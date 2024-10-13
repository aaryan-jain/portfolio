import { Component } from '@angular/core';

@Component({
  selector: 'app-name-display',
  standalone: true,
  imports: [],
  templateUrl: './name-display.component.html',
  styleUrl: './name-display.component.scss',
})
export class NameDisplayComponent {
  name = 'Aaryan Jain';
  constructor() {}
}
