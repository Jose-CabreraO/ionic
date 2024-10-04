import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class Tab1Page {
  newsList = [
    {
      id: 0,
      title: 'Porsche 911',
      image: '../../assets/img/porsche-cayenne-v8-phev-top-version.jpg',
      date: '2024-09-30',
      brief: 'El Porsche 911 es el icónico auto deportivo de la marca alemana Porsche, conocido por su agilidad y velocidad.',
    },
    {
      id: 1,
      title: 'Porsche Taycan',
      image: '../../assets/img/taycan.jpeg',
      date: '2024-09-30',
      brief: 'El Porsche Taycan es el primer auto totalmente eléctrico de Porsche, que combina rendimiento y sostenibilidad.',
    }
  ];

  constructor(private router: Router) {}

  goToNews(newsId: number) {
    this.router.navigate(['/tabs/tab3', newsId]);
  }
}
