import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke = '';

  constructor(private http: Http) {}
  
  ngOnInit(){
    Observable.timer(0, 2000)
    .switchMap(() =>  this.http.get('https://api.icndb.com/jokes/random'))
    .subscribe((response: Response) => {
      this.joke = response.json().value.joke;
    });

  }
}
