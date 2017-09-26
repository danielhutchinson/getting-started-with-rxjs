import { Observable, Observer } from 'rxjs'

let numbers = [1,5,10]
let source = Observable.from(numbers)

class MyObserver implements Observer<number> {
    next(value) {
        console.log(`value: ${value}`)
    }

    error(error) {
        console.log(`error ${error}`)
    }

    complete() {
        console.log('complete')
    }
}

source.subscribe(new MyObserver())