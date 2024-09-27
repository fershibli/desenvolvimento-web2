import { Component } from '@angular/core';
import { Courses } from '../models/courses';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Courses[] = [
    {
      Id: 1,
      IdCategory: 1,
      Title: 'Angular',
      Description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      Cost: 100,
      Image: 'https://angular.io/assets/images/logos/angular/angular.png',
      Duration: '40 hours'
    },
    {
      Id: 2,
      IdCategory: 1,
      Title: 'React',
      Description: 'React is a JavaScript library for building user interfaces.',
      Cost: 120,
      Image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      Duration: '30 hours'
    },
    {
      Id: 3,
      IdCategory: 1,
      Title: 'Vue.js',
      Description: 'Vue.js is a progressive framework for building user interfaces.',
      Cost: 90,
      Image: 'https://vuejs.org/images/logo.png',
      Duration: '25 hours'
    },
    {
      Id: 4,
      IdCategory: 1,
      Title: 'Node.js',
      Description: 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.',
      Cost: 80,
      Image: 'https://nodejs.org/static/images/logo.svg',
      Duration: '20 hours'
    },
    {
      Id: 5,
      IdCategory: 1,
      Title: 'Express.js',
      Description: 'Express.js is a web application framework for Node.js, released as free and open-source software under the MIT License.',
      Cost: 70,
      Image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      Duration: '15 hours'
    }
  ];
}
