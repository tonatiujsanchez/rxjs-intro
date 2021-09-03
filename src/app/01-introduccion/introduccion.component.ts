import { Component, OnInit } from '@angular/core';

import { interval, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent implements OnInit {

  timer = interval(1000)
  numero: number = 0;
  numero2: number = 0;

  subject = new Subject();

  constructor() { }

  ngOnInit(): void {
    const observableTimer = this.timer.pipe(
      map( num => Math.random() )
    );


    // SUBJECT: Ayuda a obtener los mismo resultados en ambas subscripciones
    observableTimer.subscribe( this.subject );
    
    const subscriptionTimer = observableTimer.subscribe(
      (value:any)=>{      
        this.numero = value;
        console.log('Time 1: ',value);
        
      }    
    );
    const subscriptionTimer2 = observableTimer.subscribe(
      (value:any)=>{      
        this.numero2 = value;
        console.log('Time 2: ', value);

      }    
    );




    setTimeout(()=>{
      subscriptionTimer.unsubscribe();
      subscriptionTimer2.unsubscribe();
    },7500);
  }

}
