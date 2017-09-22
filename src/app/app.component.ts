import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke = 'It is better to give than to receive. This is especially true of a Chuck Norris roundhouse kick.';

  constructor(private http: Http) {
    http.get('http://api.icndb.com/jokes/random')
      .subscribe(response => {
        this.joke = response.json().value.joke;
      });
  }
}
