import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() hero: Hero;
  @Output() deleteRequest = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onConfirm() {
    return this.deleteRequest.emit(true);
  }

  onCancel() {
    return this.deleteRequest.emit(false);
  }
}
