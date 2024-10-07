import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TemaService } from '../tema.service';

@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class Tab1Page {
  
  constructor(private router: Router, private temaService: TemaService) {}


  cambiarTema() {
    alert('Cambiando tema...');
    this.temaService.toggleTema();
  }
  
}

