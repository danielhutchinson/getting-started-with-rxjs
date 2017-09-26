import { Observable, Observer } from 'rxjs'

let numbers = [1,5,10]
let source = Observable.from(numbers)

source.subscribe(
    // next
    nextValue => console.log(`nextValue: ${nextValue}`),
    // error
    error => console.log(`error: ${error}`),
    // complete
    () => console.log('complete')
)