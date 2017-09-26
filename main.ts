import { Observable } from 'rxjs'
import { load } from './loader' 

let source = Observable.merge(
    Observable.of(1),
    Observable.from([2,3,4]),
    Observable.throw(new Error('stop')),
    Observable.of(5)
).catch(error => {
    console.log(`caught: ${error}`)
    return Observable.of(10)
})

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
)