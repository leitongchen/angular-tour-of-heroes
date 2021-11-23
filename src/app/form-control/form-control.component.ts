import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  public contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern('[a-z0-9.@]*')]),
      'subject': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'message': new FormControl(null, [Validators.required, Validators.required, Validators.minLength(100)]),
    });
  }

  get email() {
    console.log(this.contactForm.get('email').value);
    // debugger
    return this.contactForm.get('email');
  }

  onSubmit() {
    // console.log(event);
    console.log(this.contactForm);
  }

  isInvalid() {
    
  }

}
