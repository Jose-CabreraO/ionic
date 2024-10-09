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

  words: string[] = ["Soy Jose Cabrera", "Programador", "Desarrollador Web", "Entusiasta de la tecnología"];
  currentWordIndex: number = 0;
  
  constructor(private router: Router, private temaService: TemaService) {}

  ngOnInit() {
    this.changeWord();
  }

  changeWord() {
    const dynamicTextElement = document.querySelector('.dynamic-text');
    
    if (dynamicTextElement) { 
      setInterval(() => {
        dynamicTextElement.textContent = this.words[this.currentWordIndex];
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      }, 4000); 
    }
  }
  
}

