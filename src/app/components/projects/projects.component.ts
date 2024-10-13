import { Component, OnInit } from '@angular/core';
import { ProjectIndividualComponent } from "./project-individual/project-individual.component";
import { ProjectInfo } from '../../dto/project-info.dto';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectIndividualComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {


  projects: ProjectInfo[] = []

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    })
  }

}
