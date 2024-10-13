import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = false;

  // Function to toggle sidenav
  toggleMenu() {
    console.log('Toggling sidenav');

    this.menuOpen = !this.menuOpen;
    // Disable/enable scrolling by adding/removing a class
    if (this.menuOpen) {
      document.body.classList.add('no-scroll'); // Add the class to disable scroll
    } else {
      document.body.classList.remove('no-scroll'); // Remove the class to enable scroll
    }
  }
}
