import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class NewsPage implements OnInit {
  selectedNews: any = null;

  newsList = [
    {
      id: 0,
      title: 'Porsche Cayenne',
      image: '../../assets/img/porsche-cayenne-v8-phev-top-version.jpg',
      date: '2024-09-30',
      content: `
          El Porsche Cayenne es un SUV de lujo que combina la elegancia y el rendimiento de 
          los autos deportivos de Porsche. Desde su lanzamiento en 2002, ha revolucionado el 
          concepto de SUV al ofrecer una experiencia de conducción dinámica y un diseño 
          atractivo. La última generación del Cayenne está equipada con motores potentes y 
          eficientes, disponibles en varias versiones, incluyendo modelos híbridos. 
          Su interior está repleto de tecnología avanzada y acabados de alta calidad, 
          proporcionando comodidad tanto para el conductor como para los pasajeros.
  
          **Especificaciones:**
          - Motor: 3.0L V6 Turbo
          - Potencia: 335 CV
          - Aceleración: 0-100 km/h en 5.9 segundos
          - Velocidad máxima: 245 km/h
          - Precio: 75,000 USD
  
          El Cayenne también destaca por su versatilidad, ofreciendo espacio para cinco personas y 
          capacidad de carga generosa, lo que lo convierte en una opción ideal para familias o 
          para aquellos que necesitan espacio adicional. Además, su sistema de tracción 
          total y su configuración de suspensión activa aseguran un rendimiento excepcional en 
          diversas condiciones de carretera, manteniendo la agilidad y la estabilidad que se 
          esperan de un Porsche. Con su combinación de lujo, rendimiento y funcionalidad, el 
          Porsche Cayenne es uno de los SUV más deseados en el mercado.
      `,
    },
    {
      id: 1,
      title: 'Porsche Taycan',
      image: '../../assets/img/taycan.jpeg',
      date: '2024-09-30',
      content: `
          El Porsche Taycan es el primer auto totalmente eléctrico de Porsche, lanzado como parte de 
          la nueva era de autos deportivos sostenibles. Aunque es eléctrico, el Taycan no sacrifica el 
          rendimiento: acelera de 0 a 100 km/h en menos de 3 segundos, rivalizando con autos a gasolina 
          de alto rendimiento. El Taycan también incluye un sistema de carga rápida que permite recuperar 
          hasta el 80% de la batería en solo 30 minutos, lo que lo convierte en una opción práctica para 
          los conductores diarios. Su diseño interior combina lujo y tecnología, con pantallas digitales 
          y materiales sostenibles en todo el vehículo.
  
          **Especificaciones:**
          - Motor: 100% Eléctrico
          - Potencia: 761 CV
          - Aceleración: 0-100 km/h en 2.8 segundos
          - Autonomía: 412 km
          - Precio: 180,000 USD
  
          El Taycan ha sido aclamado por su rendimiento excepcional y su capacidad de respuesta en la 
          carretera, ofreciendo una experiencia de conducción emocionante. La tecnología avanzada de 
          Porsche, que incluye un sistema de tracción total y una distribución de peso equilibrada, 
          asegura que el Taycan sea tan ágil como sus predecesores de combustión interna. Además, el 
          Taycan demuestra que la sostenibilidad y la emoción pueden coexistir, estableciendo un nuevo 
          estándar para los autos deportivos eléctricos.
      `,
    }
  ];
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const newsId = idParam !== null ? +idParam : null;

   
    if (newsId !== null && !isNaN(newsId)) {
      this.selectedNews = this.newsList.find(news => news.id === newsId);
    }
  }
}
