import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from "rxjs";
import { map, debounceTime, tap } from "rxjs/operators";

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {

  @ViewChild('inputBox') inputBox!:ElementRef<HTMLInputElement>;

  result:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{

    //debounceTime: Sirve para atrasar un determinado tiempo un evente o petición
    const inputEvent = fromEvent( this.inputBox.nativeElement, 'input' )
      .pipe(
        debounceTime(300), 
        map( (data:any) => data.target.value )
      );

    inputEvent.subscribe( (data ) =>{
      this.result = data;
    });

    
  }

}
