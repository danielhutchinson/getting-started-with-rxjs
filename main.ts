import { Observable } from 'rxjs'

let output = document.getElementById('output')
let button = document.getElementById('button')

let click = Observable.fromEvent(button, 'click')

function load(url: string) : Observable<any> {
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

function renderMovies(movies) : void {
    movies.forEach(movie => {
        let div = document.createElement('div')
        div.innerText = movie.title
        output.appendChild(div)
    });
}


// flat map is a more sophisticated version of map
// it will automatically subscribe to any observables
// that are passed to it. In this case the observable
// returned by load
click.flatMap(event => load('movies.json'))
    .subscribe(movies => renderMovies(movies))