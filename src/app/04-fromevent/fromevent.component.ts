import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit, AfterViewInit {

  @ViewChild('btnFromEvent') actionBtn!: ElementRef<HTMLButtonElement>;

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit (){
    const source = fromEvent(this.actionBtn.nativeElement, 'click');
    source.subscribe(
      (evt: PointerEventInit )=>{
        console.log(evt);
        console.log( evt.clientX, evt.clientY );        
      }
    );

    
    fromEvent( document, 'mousemove' ).subscribe(
      (evt:MouseEventInit )=>{
        console.log(evt);
      }
    );

  }


}
