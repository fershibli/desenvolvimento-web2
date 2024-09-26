import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {
  categories: Category[] = [
    { id: 1, image: 'assets/cursoti.jpg', title: 'Cursos de Ti' },
    { id: 2, image: 'assets/cursovazio.png', title: 'Category 2' },
    { id: 3, image: 'assets/cursovazio.png', title: 'Category 3' },
    { id: 4, image: 'assets/cursovazio.png', title: 'Category 4' },
    { id: 5, image: 'assets/cursovazio.png', title: 'Category 5' }
  ];
}
