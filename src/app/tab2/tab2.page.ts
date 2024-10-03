import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class Tab2Page {
  username = 'Usuario';
  email = 'usuario@example.com';
}
