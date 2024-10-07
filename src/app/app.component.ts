import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TemaService } from './tema.service';
import { NewsDetailPage } from './news-detail/news-detail.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, NewsDetailPage],
})
export class AppComponent {
  constructor(private temaService: TemaService, private router: Router) {}
  ngOnInit(){
    this.temaService.toggleTema();
  }

  cambiarTema(){
    this.temaService.toggleTema();
  }
}
