import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke = '';

  constructor(private http: Http) {
    http.get('https://api.icndb.com/jokes/random')
      .subscribe((response: Response) => {
        this.joke = response.json().value.joke;
      });
  }
}
