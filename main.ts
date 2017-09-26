import { Observable } from 'rxjs'
import { load } from './loader' 

let source = Observable.create(observer => {
    observer.next(1)
    observer.next(2)
    observer.error('stop')
    //throw new Error('stop')
    observer.next(3)
    observer.complete()    
})

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
)