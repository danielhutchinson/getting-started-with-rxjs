import { Observable } from 'rxjs'

let numbers = [1, 5, 10]
let source = Observable.create((observer) => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++])

        if (index < numbers.length) {
            setTimeout(produceValue, 500)
        }
        else {
            observer.complete()
        }
    }

    produceValue()

}).map(n => n * 2)

source.subscribe(
    nextValue => console.log(`nextValue: ${nextValue}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
)