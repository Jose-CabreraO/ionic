import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TemaService } from './tema.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private temaService: TemaService) {}
  ngOnInit(){
    this.temaService.toggleTema();
  }

  cambiarTema(){
    this.temaService.toggleTema();
  }
}
