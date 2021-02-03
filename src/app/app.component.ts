import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-hw07-pipesAndDirectives';

  asyncValue = new Promise(resolve => {
    setTimeout(() => {
        resolve('this is magic');
    }, 1000);
  });

  date = new Date();

  price = 100;

  user = {name: 'rostik', age: 21, status: false}

  e = 2.712468155484851;
}
