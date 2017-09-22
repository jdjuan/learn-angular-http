# Learn HTTP in Angular

## 1. Let's use string interpolation 🤓

1. Create a `joke` variable in `app.component.ts` and assign this random joke: `Ghosts are actually caused by Chuck Norris killing people faster than Death can process them.`
1. Now go to `app.component.html` and replace its content with: `<h1>{{joke}}</h1>`. Now go and check the browser! 🚀

## 2. Let's use string interpolation and import HTTP 🔌

1. Now it's time to start using HTTP requests! Go to `app.module.ts` and import the `HttpModule` from `import { HttpModule } from '@angular/http';`.
2. Actually, to start using it we need to put it in the `imports` array: `imports: [BrowserModule, HttpModule],`
3. And the final step is to **inject it** in our component. Go to `app.component.ts` and create a `constructor` like this one: `constructor(private http: Http) { }`

## 3. Let's use string interpolation, import HTTP and fetch a information 🔥

1. So we are almost there! Last thing we want to do is create a channel (AKA Observable): `http.get('https://api.icndb.com/jokes/random');`
2. Second we will subscribe to it, so we can get a new joke `http.get('https://api.icndb.com/jokes/random').subscribe();`
3. Finally, we want to `log` the information in the `console` with: `http.get('https://api.icndb.com/jokes/random').subscribe((response) => { console.log(response);});`

## 4. Let's use string interpolation, import HTTP, fetch a information and show a Joke ⭐️

1. This is it, we only need to format the information correctly, replace `console.log(response)` with `this.joke = response.json().value.joke;`
