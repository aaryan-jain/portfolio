import { Component, OnInit } from '@angular/core';
import { AboutInfo } from '../../dto/about-info.dto';
import { AboutMeService } from '../../about-me.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  bio!: AboutInfo;
  constructor(private aboutService: AboutMeService) {}
  ngOnInit(): void {
    this.aboutService.getAboutInfo().subscribe((data) => {
      this.bio = data;
    })
  }

}
