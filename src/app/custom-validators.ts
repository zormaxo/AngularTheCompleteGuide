import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProject(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { invalidProjectName: true };
    }
    return null;
  }

  static asyncOnvalidProject(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({ invalidProjectName: true });
        } else {
          return null;
        }
      }, 2000);
    });
    return promise;
  }
}
