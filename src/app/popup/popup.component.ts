import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() hero: any;
  @Output() deleteRequest = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onConfirm(event: Event) {
    console.log(`confermato voglio cancellare`)
    this.deleteRequest.emit(true);
  }

  onCancel(event: Event) {
    console.log(`No, ho cambiato idea, non voglio cancellare.`);
    this.deleteRequest.emit(false);
  }
}
