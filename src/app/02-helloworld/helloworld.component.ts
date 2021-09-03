import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  eventos:any = [];

  constructor() { }

  ngOnInit(): void {
    const hello = new Observable(( observer )=>{
      observer.next( 'hello' );
      
      setTimeout(() => {
        observer.next( 'world' );
      }, 2000);
      
    });

    hello.subscribe(
      (evt)=>{
        console.log(evt); 
        this.eventos.push( evt );
      }
    );

  }

}
