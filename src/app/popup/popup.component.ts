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
    this.deleteRequest.emit(true);
  }

  onCancel(event: Event) {
    this.deleteRequest.emit(false);
  }
}
