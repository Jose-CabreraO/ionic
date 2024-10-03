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
  showDetails: boolean[] = [false, false]; // Para manejar el estado de cada tarjeta
  private hideTimeout: any; // Para almacenar el temporizador

  constructor(private router: Router) {}

  goToNews() {
    this.router.navigate(['/tabs/tab3']);
  }

  toggleDetails(index: number) {
    this.showDetails[index] = true; // Al pasar el mouse, muestra el detalle
    clearTimeout(this.hideTimeout); // Limpia cualquier temporizador anterior
  }

  hideDetails(index: number) {
    this.hideTimeout = setTimeout(() => {
      this.showDetails[index] = false; // Cierra el detalle después de un pequeño retraso
    }, 200); // Retraso de 200 ms, ajusta según sea necesario
  }
}
