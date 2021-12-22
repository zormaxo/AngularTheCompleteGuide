import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
@ViewChild("f") signupForm : NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm, omer:HTMLFormElement) {
  //   console.log(form);
  //   console.log(omer);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}

