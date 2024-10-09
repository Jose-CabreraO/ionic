import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticias = [
      {
        id: 1,
        titulo: 'Porsche 911 GT3 RS: Rendimiento Máximo',
        fecha: '08 de octubre, 2024',
        imagen: '/assets/img/pinkPorsche;.jpeg',
        resumen: 'El Porsche 911 GT3 RS redefine el rendimiento con su motor atmosférico de alto régimen y aerodinámica avanzada.',
        contenido: `El Porsche 911 GT3 RS es una obra maestra del rendimiento automotriz. Equipado con un motor de 4.0 litros y 6 cilindros, 
        entrega una potencia de 520 caballos de fuerza. Diseñado para dominar tanto la pista como las carreteras, este modelo cuenta con 
        un sistema aerodinámico activo, frenos cerámicos y una caja de cambios PDK de 7 velocidades. Además, su interior está enfocado 
        completamente en la conducción, con asientos tipo bucket y materiales ligeros.`
      },
      {
        id: 2,
        titulo: 'Porsche 911 Turbo: Velocidad sin Compromisos',
        fecha: '07 de octubre, 2024',
        imagen: '/assets/img/porsche.jpg',
        resumen: 'El Porsche 911 Turbo ofrece una combinación perfecta entre lujo y velocidad, con tracción total y 572 caballos de fuerza.',
        contenido: `El Porsche 911 Turbo es el epítome del lujo y la velocidad. Con un motor turboalimentado de 6 cilindros de 3.8 litros, 
        genera 572 caballos de fuerza que permiten acelerar de 0 a 100 km/h en tan solo 2.7 segundos. El sistema de tracción total garantiza 
        que la potencia se distribuya de manera efectiva en cualquier condición climática. El interior está lleno de tecnología de punta y 
        detalles de lujo que hacen que cada viaje sea una experiencia única.`
      }
    ];

  constructor() { }

  getNoticias(){
    return this.noticias;
  }

  getNoticia(id: number){
    return this.noticias.find(noticia => noticia.id === id);
  }
}
