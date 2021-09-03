import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { mapTo, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit, AfterViewInit {

  @ViewChild('grid') grid! :ElementRef<HTMLDivElement>;
  
  position:any[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit():void{

    // mapTo: devuelve un valor defino que no cambia
    const clickMapTo = fromEvent( this.grid.nativeElement, 'click' )
      .pipe( mapTo('Click..') );

    //map: Devulete los valores modificados
    const clickMap = fromEvent( this.grid.nativeElement, 'click' )
      .pipe( 
        map(
          (val:any )  => [ 
            Math.floor( val.offsetX / 50 ),  //Devulve la posision X
            Math.floor( val.offsetY / 50 )  //Devuelve la posision Y
          ])
        );

    //filter: Develve solo los calores que cumplen una condición
    const clickFilter = fromEvent( this.grid.nativeElement, 'click' )
      .pipe( 
        map(
          (val:any )  => [ 
            Math.floor( val.offsetX / 50 ), 
            Math.floor( val.offsetY / 50 )
          ]
        ),
        filter(
          val => ( (val[0] + val[1]) % 2 != 0 ) //Devulve las posisiones Inpares
        )
      );


    const subs = clickFilter.subscribe( data => {
      this.position = data; 
      console.log(data)
    });
  }

  
}
