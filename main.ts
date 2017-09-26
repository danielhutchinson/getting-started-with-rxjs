import { Observable } from 'rxjs'

let source = Observable.fromEvent(document, 'mousemove')
    .map((event: MouseEvent) => {
        return {
            x: event.clientX,
            y: event.clientY
        }
    })

source.subscribe(nextValue => console.log(nextValue))