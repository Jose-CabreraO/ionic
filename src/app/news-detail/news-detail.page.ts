import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//import { Router } from "@angular/router";
import { NoticiasService } from '../noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})
export class NewsDetailPage implements OnInit {

  noticia: any;

  constructor(//private router: Router,
     private noticiasService: NoticiasService,
    private route : ActivatedRoute) { }

  ngOnInit() {
    
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.noticia = this.noticiasService.getNoticia(id);
  
  }
}
