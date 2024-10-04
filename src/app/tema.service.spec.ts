import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private isDarkTheme = false;

  constructor() {
    this.applyTheme();
  }

  toggleTema() {
    this.isDarkTheme = !this.isDarkTheme; // Cambia el estado del tema
    console.log('Tema cambiado a:', this.isDarkTheme ? 'oscuro' : 'claro'); // Agrega este log
    this.applyTheme(); // Aplica el tema basado en el nuevo estado
  }
  

  private applyTheme() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      console.log('Tema oscuro aplicado');
    } else {
      document.body.classList.remove('dark-theme');
      console.log('Tema claro aplicado');
    }
  }
  
}
