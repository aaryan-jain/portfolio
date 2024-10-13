import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-name-display',
  standalone: true,
  imports: [],
  templateUrl: './name-display.component.html',
  styleUrl: './name-display.component.scss',
})
export class NameDisplayComponent implements AfterViewInit {
  name = 'AARYAN JAIN';
  description = 'I am a fullstack software developer and a tech enthusiast working at Zenya Technologies. I am passionate about clean coding and building scalable applications.';
  constructor() {}

  ngAfterViewInit(): void {
    // this.name = ' > ' + this.name;
  }
}
