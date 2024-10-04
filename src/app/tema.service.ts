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
    this.isDarkTheme = !this.isDarkTheme; 
    console.log('Tema cambiado a:', this.isDarkTheme ? 'oscuro' : 'claro'); 
    this.applyTheme(); 
  }

  private applyTheme() {
    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }
}


