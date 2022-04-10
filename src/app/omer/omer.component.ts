import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ng-if-as',
  template: `
    <button (click)="nextUser()">Next User</button>
    <br>
    <div *ngIf="nextUser() as users; else loading">
      Hello {{users.last}}, {{users.first}}!
    </div>
    <ng-template #loading let-user>Waiting... (user is {{user|json}})</ng-template>
`
})
export class OmerComponent {
  nextUser() {
    return { first: "ömer", last: "emre" };
  }
}
