import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class Tab3Page {
  newsList = [
    { title: 'Noticia 1', content: 'Contenido de la noticia 1...' },
    { title: 'Noticia 2', content: 'Contenido de la noticia 2...' },
  ];
}
