import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProjectInfo } from '../../../dto/project-info.dto';

@Component({
  selector: 'app-project-individual',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './project-individual.component.html',
  styleUrl: './project-individual.component.scss'
})
export class ProjectIndividualComponent implements OnInit {

  index = input.required<number>();
  project = input.required<ProjectInfo>();

  constructor() { }

  ngOnInit(): void {
  }

}
