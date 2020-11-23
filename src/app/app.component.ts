import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello World';
  grade = 0;
  creditCardInput: string;

  ngOnInit(): void {
    this.grade = Math.floor(Math.random() * (100 - 20 + 1) + 20);
  }


}
