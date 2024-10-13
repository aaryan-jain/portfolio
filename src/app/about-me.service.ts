import { Injectable } from '@angular/core';
import { AboutInfo } from './dto/about-info.dto';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  private aboutInfo: AboutInfo = {
    name: 'Aaryan Jain',
    designation: 'Software Developer | Web Developer',
    email: 'aaryan.vijayraj@gmail.com',
    phone: '+917982482886',
    personalImage: 'assets/aaryan-1-cropped.jpg',
    coverLetter: `I am an engineer with nearly 4 years of hands-on experience, specializing in scalable applications using modern web frameworks such as Spring Boot, ExpressJs, MEAN/MERN Stack, and Django. As a FULLSTACK DEVELOPER, I possess comprehensive knowledge of databases and CI/CD.\n\nCommitted to best practices, including TDD and AGILE development, I excel in delivering high-performance solutions with strong leadership, communication, and problem-solving abilities. `,
    workexperiences: [
      {
        company: 'Zenya Technologies',
        time: 'May 2023 - Present',
        designation: 'Software Developer (SDE 2), Remote',
        role: 'Built an ecosystem for B2B needs in the corporate housing sector. Core member of the Zenya application development team using Angular, Expressjs, NestJs, MySql, AWS, and GitHub. ',
      },
      {
        company: 'Incubyte LLP',
        time: 'April 2022 - May 2023',
        designation: 'Software Craftsperson, Remote',
        role: 'Worked on a fintech solution, resulting in a 20x increase in user base using Java (Springboot, Micronaut), Angular, and Python (Azure Functions).',
      },
      {
        company: 'Larsen and Toubro Infotech',
        time: 'September 2020 - April 2022 ',
        designation: 'Senior Software Engineer, Remote',
        role: 'Developed logistics applications and trained new developers, promoted to Senior Software Engineer within 10 months. ',
      },
    ],
  };
  constructor() {}

  getAboutInfo() {
    return of(this.aboutInfo);
  }
}
