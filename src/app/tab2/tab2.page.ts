import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class PerfilPage implements OnInit {
  username : string;
  email: string;
  phone : string;
  bio: string;
  instagram: string;
 
  
  constructor(){
    this.username = "Joselo"
    this.email = "Joselocabrera563@gmail.com"
    this.phone = "0971554954"
    this.bio = "Apasionado por la tecnología y el desarrollo de software"
    this.instagram = "https://www.instagram.com/joselo_09"
  }
  ngOnInit() {}
  goToSettings() {
    // Navegar a la página de configuración (implementa la lógica de navegación)
    console.log('Navegar a configuración');
  }

  logout() {
    // Implementa la lógica para cerrar sesión
    console.log('Cerrar sesión');
  }
}
  
