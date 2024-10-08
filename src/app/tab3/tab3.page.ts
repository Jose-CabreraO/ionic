import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { Router } from '@angular/router';
import { NoticiasService } from '../noticias.service';


@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule] 
})
export class NewsPage implements OnInit {
  

  noticias : any[] = [];


  constructor(private router: Router, private noticiasService: NoticiasService) {} 

  ngOnInit() {
    this.noticias = this.noticiasService.getNoticias();
  }   
  }

