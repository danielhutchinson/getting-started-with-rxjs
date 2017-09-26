import { Observable } from 'rxjs'

let output = document.getElementById('output')
let button = document.getElementById('button')

let click = Observable.fromEvent(button, 'click')

function load(url: string): Observable<any> {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest()

        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText)
                observer.next(data)
                observer.complete()
            }
            else {
                observer.error(xhr.statusText)
            }
        })

        xhr.open('GET', url)
        xhr.send()
    }).retry(3)
}

function renderMovies(movies): void {
    movies.forEach(movie => {
        let div = document.createElement('div')
        div.innerText = movie.title
        output.appendChild(div)
    });
}

click.flatMap(event => load('moviess.json'))
    .subscribe(
    movies => renderMovies(movies),
    error => console.log(error)
    )