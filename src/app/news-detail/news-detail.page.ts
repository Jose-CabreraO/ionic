import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from "@angular/router";


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})
export class NewsDetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
