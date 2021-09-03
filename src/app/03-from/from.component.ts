import { Component, OnInit } from '@angular/core';
import { from } from "rxjs";

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  myArrNumeros = [1,2,3,4,5];
  myArrStrings = 'Hola mundo';
  myPromise = new Promise( (resolve, reject)=>{
    setTimeout(() => {
      resolve('Hello world');
    }, 2000);
  });


  args:any[] = [];
  constructor() { }

  ngOnInit(): void {

    const myObservable = from( this.myPromise );

    myObservable.subscribe( val =>{
        this.args.push( val );
    });


  }

}
