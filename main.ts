import { Observable } from 'rxjs'

let output = document.getElementById('output')
let button = document.getElementById('button')

let click = Observable.fromEvent(button, 'click')

function load(url: string) {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest()

        xhr.addEventListener('load', () => {
            let data = JSON.parse(xhr.responseText)
            observer.next(data)
            observer.complete()
        })

        xhr.open('GET', url)
        xhr.send()
    })
}

function renderMovies(movies) {
    movies.forEach(movie => {
        let div = document.createElement('div')
        div.innerText = movie.title
        output.appendChild(div)
    });
}

click.flatMap(event => load('movies.json'))
    .subscribe(movies => renderMovies(movies))