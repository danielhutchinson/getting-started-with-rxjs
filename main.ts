import { Observable } from 'rxjs'

let numbers = [1,5,10]
let source = Observable.create((observer) => {

    for(let n of numbers) {

        // if(n === 5) {
        //     observer.error('something has gone wrong')
        // }

        observer.next(n)
    }

    observer.complete()

})

source.subscribe(
    nextValue => console.log(`nextValue: ${nextValue}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
)