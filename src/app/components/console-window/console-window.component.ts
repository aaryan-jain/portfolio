import { Component, OnInit } from '@angular/core';
import { DisplayInfo } from '../../dto/display-info.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-console-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './console-window.component.html',
  styleUrl: './console-window.component.scss',
})
export class ConsoleWindowComponent implements OnInit {
  informationToDisplay: DisplayInfo[] = [
    {
      command: 'java GetCurrentLocation',
      output: 'Bhopal, Madhya Pradesh, INDIA, 462021',
    },
    {
      command: 'bash getResume.sh',
      output: [
        {
          data: 'AaryanResume.pdf',
          link: '../../../assets/AaryanResume.pdf',
        },
      ],
      isLink: true,
    },
    {
      command: 'python GetContact.py',
      output: [
        {
          data: 'aaryan.vijayraj@gmail.com',
          link: 'aaryan.vijayraj@gmail.com',
        },
        {
          data: 'Linkedin',
          link: 'https://www.linkedin.com/in/aaryan-vijayraj/',
        },
        {
          data: 'Github',
          link: 'https://github.com/aaryan-jain'
        },
      ],
      isLink: true,
    },
    {
      command: 'node GetLikesAndHobbies.js',
      output: `{ 
      'Likes': ['Coding', 'Watching Movies', 'Lecturing people on random stuff', 'History'],
      'Hobbies': ['Photography', 'Travelling', 'Gaming']
      }`,
    },
    {
      command: 'gcc getEducation.cpp -o getEducation.exe && ./getEducation.exe',
      output: `B.E. in Computer Science and Engineering from Madhav Institute of Technology and Science, Gwalior, India`,
    },
    {
      command: 'npx ts-node getSkills.ts',
      output: `{
        'Languages': ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript'],
        'Frameworks': ['Angular', 'React', 'NodeJS', 'ExpressJS'],
        'Databases': ['MySQL', 'MongoDB', 'Firebase'],
        'Others': ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'JIRA', 'Confluence']
      }`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
