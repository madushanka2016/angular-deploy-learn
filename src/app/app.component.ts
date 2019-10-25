import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'madushanka';
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
}
