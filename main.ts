import { Observable } from 'rxjs'

let output = document.getElementById('output')
let button = document.getElementById('button')

let click = Observable.fromEvent(button, 'click')

function load(url: string): Observable<any> {
    let promise = fetch(url).then(response => response.json())
    return Observable.fromPromise(promise)
}

function renderMovies(movies): void {
    movies.forEach(movie => {
        let div = document.createElement('div')
        div.innerText = movie.title
        output.appendChild(div)
    });
}

click.flatMap(event => load('movies.json'))
    .subscribe(
    movies => renderMovies(movies),
    error => console.log(error)
    )