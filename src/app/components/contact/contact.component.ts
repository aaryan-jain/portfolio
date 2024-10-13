import { Component } from '@angular/core';
import { HeartComponent } from "../heart/heart.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeartComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
