import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectInfo } from './dto/project-info.dto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<ProjectInfo[]> {
    return of([
      {
        title: 'Project Gladiator',
        description:
          'This is the full stack of the project Gladiator, which is an E-Commerce web application that I created as an Assignment for my first company. The backend is built using Spring Boot, JPA, MySQL and Angular. It has REST APIs for CRUD operations on products, categories, and users. It also has a feature to add products to the cart and place orders. The frontend of the project is built using Angular and is hosted on Firebase.',
        tags: [
          {
            tagName: 'SPRING BOOT',
            tagColor: 'blue',
          },
          {
            tagName: 'JAVA',
            tagColor: 'blue',
          },
          {
            tagName: 'MYSQL',
            tagColor: 'green',
          },
          {
            tagName: 'JPA',
            tagColor: 'blue',
          },
          {
            tagName: 'JUNIT',
            tagColor: 'blue',
          },
          {
            tagName: 'REST API',
            tagColor: 'blue',
          },
          {
            tagName: 'MVC',
            tagColor: 'blue',
          },
          {
            tagName: 'Maven',
            tagColor: 'blue',
          },
          {
            tagName: 'GIT',
            tagColor: 'orange',
          },
          {
            tagName: 'ANGULAR',
            tagColor: 'brown',
          },
          {
            tagName: 'FIREBASE',
            tagColor: 'brown',
          },
          {
            tagName: 'HTML',
            tagColor: 'brown',
          },
          {
            tagName: 'CSS',
            tagColor: 'brown',
          },
          {
            tagName: 'TYPESCRIPT',
            tagColor: 'brown',
          },
        ],
        liveLink: '',
        githubLink: 'https://github.com/aaryan-jain/gladiator-backend',
        image:
          'https://static.semrush.com/blog/uploads/media/2d/88/2d88ac0fa37105efb8a0747acdb7a668/de91d0d7a2d3e592cc0914d5556ea000/what-is-ecommerce.svg',
        additionalInfo: {
          isLive: false,
        },
      },
      {
        title: 'Bank Kata',
        description:
          'This is a complete backend project I worked on to practice TDD and clean coding. It is a simple bank application that has features to deposit, withdraw, and transfer money. The project is built using Spring Boot, JPA, and MySQL. It has REST APIs for CRUD operations on accounts and transactions.',
        tags: [
          {
            tagName: 'MICRONAUT',
            tagColor: 'blue',
          },
          {
            tagName: 'JAVA',
            tagColor: 'blue',
          },
          {
            tagName: 'MYSQL',
            tagColor: 'green',
          },
          {
            tagName: 'JPA',
            tagColor: 'blue',
          },
          {
            tagName: 'JUNIT',
            tagColor: 'blue',
          },
          {
            tagName: 'REST API',
            tagColor: 'blue',
          },
          {
            tagName: 'MVC',
            tagColor: 'blue',
          },
          {
            tagName: 'Maven',
            tagColor: 'blue',
          },
          {
            tagName: 'GIT',
            tagColor: 'orange',
          },
        ],
        liveLink: '',
        githubLink: 'https://github.com/aaryan-jain/BankKataIncubyte',
        image:
          'https://blog.knoldus.com/wp-content/uploads/2020/09/CleanCode.jpg',
        additionalInfo: {
          isLive: false,
          buttons: [
            {
              label: 'Problem Statement',
              link: 'https://kata-log.rocks/banking-kata',
            },
          ],
        },
      },
      {
        title: 'Dict.io',
        description:
          'This project is the front end of a simple CRUD application. It just stores words into local memory of the server. The techstack as mentioned by github is Angular. This website is hosted on firebase, and the server is hosted on heroku.',
        tags: [
          {
            tagName: 'ANGULAR',
            tagColor: 'brown',
          },
          {
            tagName: 'HTML',
            tagColor: 'brown',
          },
          {
            tagName: 'CSS',
            tagColor: 'brown',
          },
          {
            tagName: 'TYPESCRIPT',
            tagColor: 'brown',
          },
        ],
        liveLink: 'https://dict-io.web.app/',
        githubLink: 'https://github.com/aaryan-jain/dict.io',
        image:
          'https://th-thumbnailer.cdn-si-edu.com/ZIW1JBoxSAmlMT0KcMdMxOKmGYE=/1000x750/filters:no_upscale():focal(1750x1167:1751x1168)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/4b/66/4b667b8b-1e65-4d52-9fe0-ddf28c9a8123/pexels-pixabay-267669.jpg',
        additionalInfo: 'This is additional info for project 3',
      },
      {
        title: 'Flights Tracker',
        description:
          'This is a complete FE project I worked on to complete a coding assignment for a company, we input the flight path in the app and it gives us the path of the flight on the map. The project is built using Angular, HTML, CSS, and Typescript. It has REST APIs for CRUD operations on flights.',
        tags: [
          {
            tagName: 'ANGULAR',
            tagColor: 'brown',
          },
          {
            tagName: 'HTML',
            tagColor: 'brown',
          },
          {
            tagName: 'CSS',
            tagColor: 'brown',
          },
          {
            tagName: 'TYPESCRIPT',
            tagColor: 'brown',
          },
          {
            tagName: 'GIT',
            tagColor: 'orange',
          },
          {
            tagName: 'REST API',
            tagColor: 'blue',
          },
        ],
        liveLink: '',
        githubLink: 'https://github.com/aaryan-jain/flights',
        image:
          'https://assets.telegraphindia.com/telegraph/c1f195be-91a3-4b2e-9f93-3635f75763f8.jpg',
        additionalInfo: {
          isLive: false,
        },
      },
      {
        title: 'Studi0 Statiq',
        description:
          'This is a complete FE project I worked on for fun, It is a simple website which highlights the features of a fictional company. ',
        tags: [
          {
            tagName: 'ANGULAR',
            tagColor: 'brown',
          },
          {
            tagName: 'HTML',
            tagColor: 'brown',
          },
          {
            tagName: 'CSS',
            tagColor: 'brown',
          },
          {
            tagName: 'TYPESCRIPT',
            tagColor: 'brown',
          },
          {
            tagName: 'GIT',
            tagColor: 'orange',
          },
        ],
        liveLink: 'https://studi0statiq.web.app',
        githubLink: 'https://github.com/aaryan-jain/studio-static',
        image:
          'https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/why-study-architecture_0.jpg?itok=cgMcrCfY',
        additionalInfo: {},
      },
      {
        title: 'mana-lee',
        description:
          'This is a complete FE project I worked on to get myself acquainted with tailwind and to give something to my girlfriend as well!',
        tags: [
          {
            tagName: 'ANGULAR',
            tagColor: 'brown',
          },
          {
            tagName: 'HTML',
            tagColor: 'brown',
          },
          {
            tagName: 'CSS',
            tagColor: 'brown',
          },
          {
            tagName: 'TYPESCRIPT',
            tagColor: 'brown',
          },
          {
            tagName: 'TAILWIND',
            tagColor: 'brown',
          },
        ],
        liveLink: 'https://mana-lee.web.app/',
        githubLink: 'https://github.com/aaryan-jain',
        image:
          'https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg',
        additionalInfo: {},
      },
    ]);
  }
}
